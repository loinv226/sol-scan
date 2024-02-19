import { Connection } from "@solana/web3.js";
import { JUPITER_V6_PROGRAM_ID, RPC_URL } from "./common/constants";
import { JupiterHandler } from "./jupiter";
import { RaydiumHandler } from "./raydium";
import { filterInstructions } from "./common/instruction";
import { fechTransaction } from "./common/web3";

const connection = new Connection(RPC_URL);

async function main() {
  // get signature from cmd
  const signature =
    process.argv.length > 2
      ? process.argv[2]
      : "4U11uP9JXAgepMxwajAgJvs5SHicvfD1WWEogELKoPKWiAPzHXu426HF5xQz9LRo6nfaznLHiQcS1hiFERUGKp6c";

  console.log("=======Parse signature=======");
  console.log(signature);

  // fetch and match processor
  const tx = await fechTransaction(connection, signature);
  const ixs = filterInstructions(tx);

  let isInteractWithJupiter = !!ixs.find((ix) =>
    ix.programId.equals(JUPITER_V6_PROGRAM_ID)
  );

  if (isInteractWithJupiter) {
    //tx example: "57tvHwvcviVs3CsjCVoCRqjuDimmnCF23rYTeUJmEYwLkcMjnn5vih2xwLkqiPHi687SnDkU96mRvdBYpU7ba9Rw";
    const jupiter = new JupiterHandler(connection);
    jupiter.processTxn(tx);
    return;
  }

  const raydium = new RaydiumHandler(connection);
  raydium.processTxn(tx);
}

main().catch((err) => {
  console.error("ERROR: ", err);
});
