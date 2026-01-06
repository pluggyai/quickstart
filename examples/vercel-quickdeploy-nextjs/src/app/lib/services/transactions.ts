import { TransactionRecord } from "@/app/types/pluggy";
import { getSupabaseAdmin } from "../supabase/client";

export const transactionsService = {

  async upsertTransactions(
    transactions: TransactionRecord[]
  ): Promise<TransactionRecord[]> {
    const { data, error } = await getSupabaseAdmin()
      .from("transactions")
      .upsert(transactions, {
        onConflict: "transaction_id",
        ignoreDuplicates: false,
      })
      .select();

    if (error) {
      console.error("Error upserting transactions:", error);
      throw new Error(`Failed to upsert transactions: ${error.message}`);
    }

    return data || [];
  },

  async getTransactionsByAccountId(
    accountId: string,
    page = 1,
    pageSize = 50
  ): Promise<TransactionRecord[]> {
    const offset = (page - 1) * pageSize;
    
    const { data, error } = await getSupabaseAdmin()
      .from("transactions")
      .select("*")
      .eq("account_id", accountId)
      .order("date", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      console.error("Error fetching transactions:", error);
      throw new Error(`Failed to fetch transactions: ${error.message}`);
    }

    return data || [];
  },

  async getTransactionsCountByAccountId(accountId: string): Promise<number> {
    const { count, error } = await getSupabaseAdmin()
      .from("transactions")
      .select("*", { count: 'exact', head: true })
      .eq("account_id", accountId);

    if (error) {
      console.error("Error counting transactions:", error);
      throw new Error(`Failed to count transactions: ${error.message}`);
    }

    return count || 0;
  },

  async deleteTransactions(transactionIds: string[]): Promise<void> {
    const supabase = getSupabaseAdmin();
    
    const { error } = await supabase
      .from("transactions")
      .delete()
      .in("transaction_id", transactionIds);

    if (error) {
      console.error("Error deleting transactions:", error);
      throw new Error(`Failed to delete transactions: ${error.message}`);
    }
  },

};