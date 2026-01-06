import { Transaction } from "pluggy-sdk";
import { TransactionRecord } from "../../../types/pluggy";

export function mapTransactionFromPluggyToDb(transaction: Transaction, accountId: string): Omit<TransactionRecord, 'id' | 'item_id'> {
  return {
    account_id: accountId,
    transaction_id: transaction.id,
    description: transaction.description || '',
    description_raw: transaction.descriptionRaw || undefined,
    amount: transaction.amount,
    date: transaction.date instanceof Date ? transaction.date.toISOString() : transaction.date,
    balance: transaction.balance,
    currency_code: transaction.currencyCode || 'BRL',
    category: transaction.category || undefined,
    category_id: transaction.categoryId || undefined,
    provider_code: transaction.providerCode,
    provider_id: transaction.providerId || undefined,
    status: (transaction.status || 'POSTED') as 'POSTED' | 'PENDING',
    type: transaction.type as 'CREDIT' | 'DEBIT',
    operation_type: transaction.operationType || undefined,
    operation_category: undefined,
    payment_data: transaction.paymentData || undefined,
    credit_card_metadata: transaction.creditCardMetadata || undefined,
    merchant: transaction.merchant || undefined,
  };
}

