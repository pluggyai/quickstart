import { getSupabaseAdmin } from '../supabase/client';
import type { PluggyItemRecord } from '@/app/types/pluggy';

const supabase = getSupabaseAdmin();

export const itemsService = {

  // Items are always listed for one user: user_id is the clientUserId the
  // item was created with (see /api/token).
  async getItems(userId: string): Promise<PluggyItemRecord[]> {
    const { data, error } = await supabase
      .from('pluggy_items')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching items:', error);
      throw new Error(`Failed to fetch items: ${error.message}`);
    }

    return data || [];
  },


  async getItem(itemId: string): Promise<PluggyItemRecord | null> {
    const supabase = getSupabaseAdmin();
    
    const { data, error } = await supabase
      .from('pluggy_items')
      .select('*')
      .eq('item_id', itemId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null;
      }
      console.error('Error fetching item:', error);
      throw new Error(`Failed to fetch item: ${error.message}`);
    }

    return data;
  },

  async upsertItem(itemData: Partial<PluggyItemRecord>): Promise<PluggyItemRecord> {
    const supabase = getSupabaseAdmin();
    
    const { data, error } = await supabase
      .from('pluggy_items')
      .upsert(itemData, {
        onConflict: 'item_id',
        ignoreDuplicates: false,
      })
      .select()
      .single();

    if (error) {
      console.error('Error upserting item:', error);
      throw new Error(`Failed to upsert item: ${error.message}`);
    }

    return data;
  },

  async deleteItem(itemId: string): Promise<void> {
    const supabase = getSupabaseAdmin();
    
    const { error } = await supabase
      .from('pluggy_items')
      .delete()
      .eq('item_id', itemId);

    if (error) {
      console.error('Error deleting item:', error);
      throw new Error(`Failed to delete item: ${error.message}`);
    }
  },
};
