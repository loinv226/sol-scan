import { ParsedTransactionWithMeta, PublicKey } from "@solana/web3.js";
import { extractEvents } from "../common/event";
import { IdlEvents, Program } from "@coral-xyz/anchor";
import { Jupiter } from "./idl";

export type SwapEvent = IdlEvents<Jupiter>["SwapEvent"];

/**
 * Extract swap events from program
 */
export function extractSwapEvents(
  program: Program,
  tx: ParsedTransactionWithMeta,
  filterByAmm?: PublicKey
): SwapEvent[] {
  const events = extractEvents(program, tx);
  const result = events
    .filter((event) => event.name === "SwapEvent")
    .map((item) => item.data as SwapEvent);
  if (filterByAmm) {
    return result.filter(
      (item) => item.amm.toBase58() === filterByAmm.toBase58()
    );
  }
  return result;
}
