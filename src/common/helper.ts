import Decimal from "decimal.js";
import { BN } from "@coral-xyz/anchor";

export function tokenAmountToDecimal(amount: BN | string, decimals = 0) {
  return new Decimal(amount.toString())
    .div(new Decimal(10).pow(decimals))
    .toNumber();
}

export function formatNumber(value: number) {
  return Intl.NumberFormat("en", { useGrouping: true }).format(value);
}
