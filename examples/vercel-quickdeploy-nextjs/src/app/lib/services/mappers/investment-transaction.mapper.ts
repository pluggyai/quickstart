import { InvestmentTransaction } from "pluggy-sdk";
import { InvestmentTransactionRecord } from "../../../types/pluggy";

export function mapInvestmentTransactionFromPluggyToDb(transaction: InvestmentTransaction, investmentId: string): Omit<InvestmentTransactionRecord, 'id'> {
  return {
    transaction_id: transaction.id,
    investment_id: investmentId,
    trade_date: transaction.tradeDate 
      ? (transaction.tradeDate instanceof Date ? transaction.tradeDate.toISOString() : transaction.tradeDate)
      : (transaction.date instanceof Date ? transaction.date.toISOString() : transaction.date),
    date: transaction.date instanceof Date ? transaction.date.toISOString() : transaction.date,
    description: transaction.description || undefined,
    quantity: transaction.quantity || undefined,
    value: transaction.value ?? 0,
    amount: transaction.amount ?? 0,
    net_amount: transaction.netAmount || undefined,
    brokerage_number: transaction.brokerageNumber || undefined,
    expenses: transaction.expenses ? JSON.stringify(transaction.expenses) as unknown as number : undefined,
    type: transaction.type || 'TRANSFER',
  };
}

