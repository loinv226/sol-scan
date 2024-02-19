import { Connection, ParsedTransactionWithMeta } from "@solana/web3.js";

/**
 * Fetch transaction detail
 */
export async function fechTransaction(
  connection: Connection,
  signature: string
): Promise<ParsedTransactionWithMeta> {
  const tx = await connection.getParsedTransaction(signature, {
    maxSupportedTransactionVersion: 0,
  });
  if (tx.meta.err) {
    console.log("Failed transaction", tx.meta.err);
    return;
  }

  return tx;
}
