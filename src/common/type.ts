import {
  ParsedInstruction,
  PartiallyDecodedInstruction,
} from "@solana/web3.js";

export type Instruction = ParsedInstruction | PartiallyDecodedInstruction;

export type TokenAccountInfo = {
  parsed: {
    info: {
      isNative: boolean;
      mint: string;
      owner: string;
      state: string;
      tokenAmount: ObjectConstructor[];
    };
    type: string;
  };
};
