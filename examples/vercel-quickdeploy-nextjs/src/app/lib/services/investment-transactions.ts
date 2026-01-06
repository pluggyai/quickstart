import { getSupabaseAdmin } from "../supabase/client";
import type { InvestmentTransactionRecord } from "@/app/types/pluggy";

export const investmentTransactionsService = {
  async upsertTransactions(
    transactions: InvestmentTransactionRecord[]
  ): Promise<InvestmentTransactionRecord[]> {
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("investment_transactions")
      .upsert(transactions, {
        onConflict: "transaction_id",
        ignoreDuplicates: false,
      })
      .select();

    if (error) {
      console.error("Error upserting investment transactions:", error);
      throw new Error(
        `Failed to upsert investment transactions: ${error.message}`
      );
    }

    return data || [];
  },

  async getTransactionsByInvestmentId(
    investmentId: string,
    page = 1,
    pageSize = 50
  ): Promise<InvestmentTransactionRecord[]> {
    const supabase = getSupabaseAdmin();
    const offset = (page - 1) * pageSize;

    const { data, error } = await supabase
      .from("investment_transactions")
      .select("*")
      .eq("investment_id", investmentId)
      .order("date", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      console.error("Error fetching investment transactions:", error);
      throw new Error(
        `Failed to fetch investment transactions: ${error.message}`
      );
    }

    return data || [];
  },

  async getTransactionsCountByInvestmentId(
    investmentId: string
  ): Promise<number> {
    const supabase = getSupabaseAdmin();

    const { count, error } = await supabase
      .from("investment_transactions")
      .select("*", { count: "exact", head: true })
      .eq("investment_id", investmentId);

    if (error) {
      console.error("Error counting investment transactions:", error);
      throw new Error(
        `Failed to count investment transactions: ${error.message}`
      );
    }

    return count || 0;
  },

  async deleteInvestmentTransactions(transactionIds: string[]): Promise<void> {
    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("investment_transactions")
      .delete()
      .in("transaction_id", transactionIds);

    if (error) {
      console.error("Error deleting investment transactions:", error);
      throw new Error(
        `Failed to delete investment transactions: ${error.message}`
      );
    }
  },
};
