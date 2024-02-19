import {
  ParsedTransactionWithMeta,
  PartiallyDecodedInstruction,
} from "@solana/web3.js";
import { Instruction } from "./type";
import * as borsh from "borsh";
import bs58 from "bs58";

export function decodeInstructionData(data: string) {
  const schema = {
    struct: {
      instruction: "u8",
      amountIn: "u64",
      max_amount_in: "u64",
    },
  };
  const decoded = borsh.deserialize(schema, Buffer.from(bs58.decode(data)));
  return decoded;
}

/**
 * Get all instructions and apply filter
 */
export function filterInstructions(
  tx: ParsedTransactionWithMeta,
  filter?: (ix: Instruction) => boolean
): Instruction[] {
  const parsedInstructions: Instruction[] = [];
  for (const instruction of tx.transaction.message.instructions) {
    if (!filter) {
      parsedInstructions.push(instruction);
    }
    if (filter && filter(instruction)) {
      parsedInstructions.push(instruction);
    }
  }

  for (const instructions of tx.meta.innerInstructions) {
    for (const instruction of instructions.instructions) {
      if (!filter) {
        parsedInstructions.push(instruction);
      }
      if (filter && filter(instruction)) {
        parsedInstructions.push(instruction);
      }
    }
  }

  return parsedInstructions;
}
