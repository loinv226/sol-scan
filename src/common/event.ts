import { Event, Program, utils } from "@coral-xyz/anchor";
import { ParsedTransactionWithMeta } from "@solana/web3.js";

/**
 * Extract events from inner ixs
 */
export function extractEvents(program: Program, tx: ParsedTransactionWithMeta) {
  let events: Event[] = [];
  if (!tx.meta) {
    return;
  }
  if (tx && tx.meta) {
    const { meta } = tx;

    meta.innerInstructions?.map(async (ix) => {
      ix.instructions.map(async (iix) => {
        if (!iix.programId.equals(program.programId)) return;
        if (!("data" in iix)) return;

        const ixData = utils.bytes.bs58.decode(iix.data);
        const eventDataOffset = 8;
        const eventData = utils.bytes.base64.encode(
          ixData.subarray(eventDataOffset)
        );
        const event = program.coder.events.decode(eventData);

        if (!event) return;

        events.push(event);
      });
    });
  }

  return events;
}
