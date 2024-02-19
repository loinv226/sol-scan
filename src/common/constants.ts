import { PublicKey } from "@solana/web3.js";
import { Jupiter } from "../jupiter/idl";
import { IdlEvents } from "@coral-xyz/anchor";

export const RPC_URL = "https://api.mainnet-beta.solana.com";

export const JUPITER_V6_PROGRAM_ID = new PublicKey(
  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"
);
export const RAYDIUM_AMM_V4_PROGRAM_ID = new PublicKey(
  "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"
);

export const NATIVE_MINT = "So11111111111111111111111111111111111111112";
export const PEPE_MINT = "FDqp7ioPenKRzQqseFv84kxDMUT83CX1qZxgDTQDkwT2";

export type SwapEvent = IdlEvents<Jupiter>["SwapEvent"];

type Currency = { symbol: string; decimals: number; address: string };
export const TOKEN_INFOS: {
  [key: string]: Currency;
} = {
  FDqp7ioPenKRzQqseFv84kxDMUT83CX1qZxgDTQDkwT2: {
    symbol: "PEPE",
    decimals: 6,
    address: "FDqp7ioPenKRzQqseFv84kxDMUT83CX1qZxgDTQDkwT2",
  },
  So11111111111111111111111111111111111111112: {
    symbol: "SOL",
    decimals: 9,
    address: "So11111111111111111111111111111111111111112",
  },
};

export const AMMIDS: { [key: string]: { base: Currency; quote: Currency } } = {
  // PEPE-SOL
  "8d4ed1uC96qCvTRZX68e3SWRzNV5jZQpmTH3GWyY7xwA": {
    base: TOKEN_INFOS["FDqp7ioPenKRzQqseFv84kxDMUT83CX1qZxgDTQDkwT2"],
    quote: TOKEN_INFOS["So11111111111111111111111111111111111111112"],
  },
};
