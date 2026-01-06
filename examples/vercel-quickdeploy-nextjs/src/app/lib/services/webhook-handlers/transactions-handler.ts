import { getPluggyClient } from "../../pluggy/client";
import { syncAccountData } from "../item-sync.service";
import { transactionsService } from "../transactions";
import { creditCardBillsService } from "../credit-card-bills";
import { accountsService } from "../accounts";
import { mapTransactionFromPluggyToDb } from "../mappers/transaction.mapper";
import { mapCreditCardBillFromPluggyToDb } from "../mappers/credit-card-bill.mapper";
import { Transaction } from "pluggy-sdk";
import { CreditCardBills } from 'pluggy-sdk/dist/types/creditCardBills';
import { WebhookEventPayload } from 'pluggy-sdk';
import type { 
    TransactionRecord,
    TransactionsWebhookPayload,
    CreditCardBillRecord,
} from "@/app/types/pluggy";

const pluggyClient = getPluggyClient();

// Helper function to fetch all transactions with pagination
async function fetchAllTransactionsWithFilter(
  accountId: string, 
  filters: { createdAtFrom?: string; ids?: string[] }
): Promise<Transaction[]> {
  const allTransactions: Transaction[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await pluggyClient.fetchTransactions(accountId, {
      ...filters,
      page,
      pageSize: 500
    });

    if (response.results && response.results.length > 0) {
      allTransactions.push(...response.results);
    }

    hasMore = response.results.length === 500;
    page++;
  }

  return allTransactions;
}

export async function handleTransactionsCreated({ accountId, itemId, transactionsCreatedAtFrom }: Extract<WebhookEventPayload, { event: 'transactions/created' }>): Promise<void> {
  try {
    const accountExists = await accountsService.getAccountById(accountId);

    if (!accountExists) {
      await syncAccountData(itemId);
    }

    const transactions = await fetchAllTransactionsWithFilter(accountId, {
      createdAtFrom: transactionsCreatedAtFrom
    });

    if (transactions.length > 0) {
      const transactionsToUpsert: TransactionRecord[] = transactions.map((tx: Transaction) => 
        mapTransactionFromPluggyToDb(tx, accountId) as TransactionRecord
      );

      await transactionsService.upsertTransactions(transactionsToUpsert);
    }
  } catch (error) {
    console.error(`Error handling transactions created for account ${accountId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      accountId,
      itemId,
    });
    throw error;
  }
}

export async function handleTransactionsUpdated({transactionIds = [], accountId = ''}: TransactionsWebhookPayload): Promise<void> {
  try {
    if (transactionIds.length === 0) return;

    const transactions = await fetchAllTransactionsWithFilter(accountId, {
      ids: transactionIds
    });

    if (transactions.length === 0) return;

    const transactionsToUpsert: TransactionRecord[] = transactions.map((tx: Transaction) => 
      mapTransactionFromPluggyToDb(tx, accountId) as TransactionRecord
    );

    await transactionsService.upsertTransactions(transactionsToUpsert);
  } catch (error) {
    console.error(`Error updating transactions for account ${accountId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      accountId,
      transactionIds,
    });
    throw error;
  }
}

export async function handleTransactionsDeleted({transactionIds = []}: TransactionsWebhookPayload): Promise<void> {
  try {
    if (transactionIds.length === 0) return;

    await transactionsService.deleteTransactions(transactionIds);
  } catch (error) {
    console.error(`Error deleting transactions:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      transactionIds,
    });
    throw error;
  }
}

export async function syncTransactionData(accountId: string): Promise<void> {
  try {
    const allTransactions = await pluggyClient.fetchAllTransactions(accountId);

    if (allTransactions.length > 0) {
      const transactions: TransactionRecord[] = allTransactions.map((tx: Transaction) => 
        mapTransactionFromPluggyToDb(tx, accountId) as TransactionRecord
      );

      await transactionsService.upsertTransactions(transactions);
    }
  } catch (error) {
    console.error(`Error syncing transactions for account ${accountId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      accountId,
    });
    throw error;
  }
}

export async function syncCreditCardBillData(accountId: string): Promise<void> {
  try {
    const billsResponse = await pluggyClient.fetchCreditCardBills(accountId);
    const billsArray = billsResponse.results || [];

    if (billsArray.length > 0) {
      const billsToSave: CreditCardBillRecord[] = billsArray.map((bill: CreditCardBills) => 
        mapCreditCardBillFromPluggyToDb(bill, accountId) as CreditCardBillRecord
      );

      await creditCardBillsService.upsertBills(billsToSave);
    }
  } catch (error) {
    console.error(`Error syncing credit card bills for account ${accountId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      accountId,
    });
    throw error;
  }
}