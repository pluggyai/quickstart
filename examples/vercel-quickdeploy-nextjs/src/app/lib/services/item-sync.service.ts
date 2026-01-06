import { getPluggyClient } from '../pluggy/client';
import { accountsService } from './accounts';
import { investmentsService } from './investments';
import { investmentTransactionsService } from './investment-transactions';
import { loansService } from './loans';
import { identityService } from './identity';
import { 
  Account,
  Investment,
  InvestmentTransaction,
  Loan,
} from 'pluggy-sdk';
import type { 
  AccountRecord, 
  InvestmentRecord,
  LoanRecord,
  IdentityRecord,
} from '@/app/types/pluggy';
import { mapAccountFromPluggyToDb } from './mappers/account.mapper';
import { mapInvestmentFromPluggyToDb } from './mappers/investment.mapper';
import { mapInvestmentTransactionFromPluggyToDb } from './mappers/investment-transaction.mapper';
import { mapLoanFromPluggyToDb } from './mappers/loan.mapper';
import { mapIdentityFromPluggyToDb } from './mappers/identity.mapper';

const pluggyClient = getPluggyClient();

export async function syncItemData(itemId: string): Promise<void> {
  try {
    await syncAccountData(itemId);
    await syncInvestmentData(itemId);
    await syncLoanData(itemId);
    await syncIdentityData(itemId);
  } catch (error) {
    console.error(`Error syncing data for item ${itemId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      itemId,
    });
    throw error;
  }
}

export async function syncAccountData(itemId: string): Promise<void> {
  try {
    const accountsResponse = await pluggyClient.fetchAccounts(itemId);

    if (accountsResponse.results && accountsResponse.results.length > 0) {
      const accounts = accountsResponse.results
        .filter((account: Account) => account.id)
        .map((account: Account) => mapAccountFromPluggyToDb(account, itemId) as AccountRecord);

      await accountsService.upsertAccounts(accounts);
    }
  } catch (error) {
    console.error(`Error syncing accounts for item ${itemId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      itemId,
    });
    throw error;
  }
}

export async function syncInvestmentData(itemId: string): Promise<void> {
  try {
    const investmentsResponse = await pluggyClient.fetchInvestments(itemId);

    if (investmentsResponse.results && investmentsResponse.results.length > 0) {
      const investmentsToSave: InvestmentRecord[] = investmentsResponse.results.map((investment: Investment) => 
        mapInvestmentFromPluggyToDb(investment) as InvestmentRecord
      );

      const savedInvestments = await investmentsService.upsertInvestments(investmentsToSave);

      for (const investment of savedInvestments) {
        try {
          await syncInvestmentTransactionData(investment.investment_id);
        } catch (error) {
          console.error(`Error syncing investment transactions for ${investment.investment_id}:`, error);
        }
      }
    }
  } catch (error) {
    console.error(`Error syncing investments for item ${itemId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      itemId,
    });
    throw error;
  }
}

export async function syncInvestmentTransactionData(investmentId: string): Promise<void> {
  try {
    const invTransactionsResponse = await pluggyClient.fetchInvestmentTransactions(investmentId);

    if (invTransactionsResponse.results && invTransactionsResponse.results.length > 0) {
      const invTransactionsToSave = invTransactionsResponse.results.map((txn: InvestmentTransaction) => 
        mapInvestmentTransactionFromPluggyToDb(txn, investmentId)
      );

      await investmentTransactionsService.upsertTransactions(invTransactionsToSave);
    }
  } catch (error) {
    console.error(`Error syncing investment transactions for ${investmentId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      investmentId,
    });
    throw error;
  }
}

export async function syncLoanData(itemId: string): Promise<void> {
  try {
    const loansResponse = await pluggyClient.fetchLoans(itemId);

    if (loansResponse.results && loansResponse.results.length > 0) {
      const loansToSave: LoanRecord[] = loansResponse.results.map((loan: Loan) => 
        mapLoanFromPluggyToDb(loan) as LoanRecord
      );

      await loansService.upsertLoans(loansToSave);
    }
  } catch (error) {
    console.error(`Error syncing loans for item ${itemId}:`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      itemId,
    });
    throw error;
  }
}

export async function syncIdentityData(itemId: string): Promise<void> {
  try {
    const identity = await pluggyClient.fetchIdentityByItemId(itemId);

    if (identity) {
      const identityToSave = mapIdentityFromPluggyToDb(identity) as IdentityRecord;
      await identityService.upsertIdentity(identityToSave);
    }
  } catch (error: unknown) {
    const httpError = error as { response?: { status?: number } };
    if (httpError?.response?.status !== 404) {
      console.error(`Error syncing identity for item ${itemId}:`, {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        itemId,
      });
      throw error;
    }
  }
}