import {
  Connection,
  PublicKey,
  ParsedTransactionWithMeta,
} from "@solana/web3.js";
import { Program, Provider } from "@coral-xyz/anchor";
import { JUPITER_IDL, Jupiter } from "./idl";
import {
  AMMIDS,
  JUPITER_V6_PROGRAM_ID,
  RAYDIUM_AMM_V4_PROGRAM_ID,
  TOKEN_INFOS,
} from "../common/constants";
import { Mint, unpackMint } from "@solana/spl-token";
import { formatNumber, tokenAmountToDecimal } from "../common/helper";
import { extractSwapEvents } from "./event";

export const jupiterProgram = new Program<Jupiter>(
  JUPITER_IDL,
  JUPITER_V6_PROGRAM_ID,
  {} as Provider
);

export class JupiterHandler {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async processTxn(tx: ParsedTransactionWithMeta): Promise<any> {
    // extract swap events from tx
    const swapEvents = extractSwapEvents(
      jupiterProgram,
      tx,
      RAYDIUM_AMM_V4_PROGRAM_ID
    );
    if (!swapEvents || swapEvents.length === 0) {
      console.error("Events not found");
      return;
    }

    // init variables
    const swapEventData = swapEvents[0];
    // token swap in
    const inputMintAddress = swapEventData.inputMint.toBase58();
    // token swap out
    const outputMintAddress = swapEventData.outputMint.toBase58();
    let inputMint: Mint;
    let outputMint: Mint;

    // get mint account info
    const mintAccountNeedFetchs: PublicKey[] = [];
    for (let item of swapEvents) {
      mintAccountNeedFetchs.push(item.inputMint);
      mintAccountNeedFetchs.push(item.outputMint);
    }
    const mintAccounts = await this.getMintAccounts(mintAccountNeedFetchs);
    // parse mint to get into
    for (let idx = 0; idx < mintAccounts.length; idx++) {
      const _mintAddress = mintAccountNeedFetchs[idx];
      const _mintInfo = unpackMint(
        _mintAddress,
        mintAccounts[idx],
        mintAccounts[idx].owner
      );
      if (_mintAddress.toBase58() === inputMintAddress) {
        inputMint = _mintInfo;
      } else if (_mintAddress.toBase58() === outputMintAddress) {
        outputMint = _mintInfo;
      }
    }
    if (!inputMint || !outputMint) {
      console.error("unpack mint error");
      return;
    }

    // compute result
    const inAmount = tokenAmountToDecimal(
      swapEventData.inputAmount,
      inputMint.decimals
    );
    const outAmount = tokenAmountToDecimal(
      swapEventData.outputAmount,
      outputMint.decimals
    );
    const ammInfo = AMMIDS["8d4ed1uC96qCvTRZX68e3SWRzNV5jZQpmTH3GWyY7xwA"];
    const computedResult = {
      type:
        swapEvents[0].inputMint.toBase58() === ammInfo.quote.address
          ? "Buy"
          : "Sell",
      inSymbol: TOKEN_INFOS[swapEvents[0].inputMint.toBase58()].symbol,
      outSymbol: TOKEN_INFOS[swapEvents[0].outputMint.toBase58()].symbol,
      inAmount: formatNumber(inAmount),
      outAmount: formatNumber(outAmount),
    };
    console.log("=======Result======");
    console.log(computedResult);
  }
  getMintAccounts(keys: PublicKey[]) {
    return this.connection.getMultipleAccountsInfo(keys);
  }
}
