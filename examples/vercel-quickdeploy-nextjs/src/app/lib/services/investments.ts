import { InvestmentRecord } from "@/app/types/pluggy";
import { getSupabaseAdmin } from "../supabase/client";

export const investmentsService = {

  async upsertInvestments(
    investments: InvestmentRecord[]
  ): Promise<InvestmentRecord[]> {
    const { data, error } = await getSupabaseAdmin()
      .from("investments")
      .upsert(investments, {
        onConflict: "investment_id",
        ignoreDuplicates: false,
      })
      .select();

    if (error) {
      console.error("Error upserting investments:", error);
      throw new Error(`Failed to upsert investments: ${error.message}`);
    }

    return data || [];
  },

  async getInvestmentsByItemId(itemId: string): Promise<InvestmentRecord[]> {
    const { data, error } = await getSupabaseAdmin()
      .from("investments")
      .select("*")
      .eq("item_id", itemId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching investments:", error);
      throw new Error(`Failed to fetch investments: ${error.message}`);
    }

    return data || [];
  }
};
