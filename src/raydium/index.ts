import {
  Connection,
  ParsedTransactionWithMeta,
  PartiallyDecodedInstruction,
} from "@solana/web3.js";
import { AMMIDS, RAYDIUM_AMM_V4_PROGRAM_ID } from "../common/constants";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { formatNumber, tokenAmountToDecimal } from "../common/helper";
import { filterInstructions } from "../common/instruction";
import { Instruction, TokenAccountInfo } from "../common/type";

export class RaydiumHandler {
  private allowedProgromIds: { [key: string]: boolean } = {
    [RAYDIUM_AMM_V4_PROGRAM_ID.toBase58()]: true,
    [TOKEN_PROGRAM_ID.toBase58()]: true,
  };

  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async processTxn(tx: ParsedTransactionWithMeta): Promise<any> {
    const instructions = filterInstructions(tx, this.filter.bind(this));

    const raydiumIx = instructions.find(
      (ix) => "data" in ix
    ) as PartiallyDecodedInstruction;

    // get some account
    const ammAccount = raydiumIx.accounts[1];
    const ammAuthority = raydiumIx.accounts[2];
    const userSourceTokenAccount = raydiumIx.accounts[15];
    const ammInfo = AMMIDS[ammAccount.toBase58()];

    // parse source token account to get mint info
    const userSourceTokenAccountInfo =
      await this.connection.getParsedAccountInfo(userSourceTokenAccount);
    const userSourceTokenAccountInfoParsed = userSourceTokenAccountInfo.value
      .data as TokenAccountInfo;
    const inputMintAddress = userSourceTokenAccountInfoParsed.parsed.info.mint;
    // token swap in
    let inputToken =
      inputMintAddress === ammInfo.quote.address ? ammInfo.quote : ammInfo.base;
    // token swap out
    let outputToken =
      inputMintAddress === ammInfo.quote.address ? ammInfo.base : ammInfo.quote;
    let transferDatas = this.filterTransferDatas(instructions);

    // swap in when authority not amm authority
    // other method to get swap in ix is last transfer idx - 1
    const swapInData = transferDatas.find(
      (item) => item.authority !== ammAuthority.toBase58()
    );

    // instruction swap out alway exist authority is ammAuthority
    // other method to get swap out ix is last transfer ix
    const swapOutData = transferDatas.find(
      (item) => item.authority === ammAuthority.toBase58()
    );
    // const decodedData = decodeInstructionData(raydiumIx.data)

    // compute result
    const inAmount = tokenAmountToDecimal(
      swapInData.amount,
      inputToken.decimals
    );
    const outAmount = tokenAmountToDecimal(
      swapOutData.amount,
      outputToken.decimals
    );
    const computedResult = {
      type: inputToken.address === ammInfo.quote.address ? "Buy" : "Sell",
      inSymbol: inputToken.symbol,
      outSymbol: outputToken.symbol,
      inAmount: formatNumber(inAmount),
      outAmount: formatNumber(outAmount),
    };

    console.log("=======Result=======");
    console.log(computedResult);
  }
  /**
   * Filter func by program and transfer type
   */
  filter(ix: Instruction): boolean {
    const isSelectedProgram = !!this.allowedProgromIds[ix.programId.toBase58()];
    const isParsed = "parsed" in ix && "type" in ix.parsed;
    if (isParsed) {
      return isSelectedProgram && ix.parsed.type === "transfer";
    }
    return isSelectedProgram;
  }
  /**
   * Filter transfer ixs data
   */
  filterTransferDatas(
    ixs: Instruction[]
  ): { amount: string; authority: string }[] {
    return ixs
      .filter((ix) => "parsed" in ix)
      .map((ix) => "parsed" in ix && ix.parsed["info"]);
  }
}
