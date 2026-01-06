import { LoanRecord } from "@/app/types/pluggy";
import { getSupabaseAdmin } from "../supabase/client";

export const loansService = {

  async upsertLoans(loans: LoanRecord[]): Promise<LoanRecord[]> {
    const { data, error } = await getSupabaseAdmin()
      .from("loans")
      .upsert(loans, {
        onConflict: "loan_id",
        ignoreDuplicates: false,
      })
      .select();

    if (error) {
      console.error("Error upserting loans:", error);
      throw new Error(`Failed to upsert loans: ${error.message}`);
    }

    return data || [];
  },

  async getLoansByItemId(itemId: string): Promise<LoanRecord[]> {
    const { data, error } = await getSupabaseAdmin()
      .from("loans")
      .select("*")
      .eq("item_id", itemId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching loans:", error);
      throw new Error(`Failed to fetch loans: ${error.message}`);
    }

    return data || [];
  }
};
