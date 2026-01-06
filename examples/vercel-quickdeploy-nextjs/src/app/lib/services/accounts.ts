import { getSupabaseAdmin } from '../supabase/client';
import type { AccountRecord } from '@/app/types/pluggy';

export const accountsService = {
  /**
   * Get accounts by item_id
   */
  async getAccountsByItemId(itemId: string): Promise<AccountRecord[]> {
    const supabase = getSupabaseAdmin();
    
    const { data, error } = await supabase
      .from('accounts')
      .select('*')
      .eq('item_id', itemId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching accounts:', error);
      throw new Error(`Failed to fetch accounts: ${error.message}`);
    }

    return data || [];
  },

  /**
   * Get a single account by account_id
   */
  async getAccountById(accountId: string): Promise<AccountRecord | null> {
    const supabase = getSupabaseAdmin();
    
    const { data, error } = await supabase
      .from('accounts')
      .select('*')
      .eq('account_id', accountId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null;
      }
      console.error('Error fetching account:', error);
      throw new Error(`Failed to fetch account: ${error.message}`);
    }

    return data;
  },

  async upsertAccounts(accounts: AccountRecord[]): Promise<AccountRecord[]> {
    const supabase = getSupabaseAdmin();
    
    const { data, error } = await supabase
      .from('accounts')
      .upsert(accounts, {
        onConflict: 'account_id',
        ignoreDuplicates: false,
      })
      .select();

    if (error) {
      console.error('Error upserting accounts:', error);
      throw new Error(`Failed to upsert accounts: ${error.message}`);
    }

    return data || [];
  },

  /**
   * Delete an account by account_id
   */
  async deleteAccount(accountId: string): Promise<void> {
    const supabase = getSupabaseAdmin();
    
    const { error } = await supabase
      .from('accounts')
      .delete()
      .eq('account_id', accountId);

    if (error) {
      console.error('Error deleting account:', error);
      throw new Error(`Failed to delete account: ${error.message}`);
    }
  },
};
