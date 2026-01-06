import { getSupabaseAdmin } from '../supabase/client';
import type { IdentityRecord } from '@/app/types/pluggy';

export const identityService = {

  async upsertIdentity(identityData: IdentityRecord): Promise<IdentityRecord> {
    const supabase = getSupabaseAdmin();
    
    const { data, error } = await supabase
      .from('identities')
      .upsert(identityData, {
        onConflict: 'identity_id',
        ignoreDuplicates: false,
      })
      .select()
      .single();

    if (error) {
      console.error('Error upserting identity:', error);
      throw new Error(`Failed to upsert identity: ${error.message}`);
    }

    return data;
  },

  async getIdentityByItemId(itemId: string): Promise<IdentityRecord | null> {
    const supabase = getSupabaseAdmin();
    
    const { data, error } = await supabase
      .from('identities')
      .select('*')
      .eq('item_id', itemId)
      .single();

    if (error) {
      // PGRST116 = no rows returned (not found)
      if (error.code === 'PGRST116') {
        return null;
      }
      console.error('Error fetching identity:', error);
      throw new Error(`Failed to fetch identity: ${error.message}`);
    }

    return data;
  },
};


