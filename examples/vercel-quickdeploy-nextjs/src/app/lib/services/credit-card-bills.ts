import { CreditCardBillRecord } from "@/app/types/pluggy";
import { getSupabaseAdmin } from "../supabase/client";

export const creditCardBillsService = {

  async upsertBills(
    bills: CreditCardBillRecord[]
  ): Promise<CreditCardBillRecord[]> {
    const { data, error } = await getSupabaseAdmin()
      .from("credit_card_bills")
      .upsert(bills, {
        onConflict: "bill_id",
        ignoreDuplicates: false,
      })
      .select();

    if (error) {
      console.error("Error upserting credit card bills:", error);
      throw new Error(`Failed to upsert credit card bills: ${error.message}`);
    }

    return data || [];
  },

  async getBillsByAccountId(
    accountId: string
  ): Promise<CreditCardBillRecord[]> {
    const { data, error } = await getSupabaseAdmin()
      .from("credit_card_bills")
      .select("*")
      .eq("account_id", accountId)
      .order("due_date", { ascending: false });

    if (error) {
      console.error("Error fetching credit card bills:", error);
      throw new Error(`Failed to fetch credit card bills: ${error.message}`);
    }

    return data || [];
  }
};


