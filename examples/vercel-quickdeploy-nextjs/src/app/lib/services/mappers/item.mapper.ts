import { Item } from "pluggy-sdk";
import { PluggyItemRecord } from "../../../types/pluggy";

export function mapItemFromPluggyToDb(item: Item): PluggyItemRecord {
  const connector = item.connector;

  const toISOString = (date: Date | string | undefined | null): string | undefined => {
    if (!date) return undefined;
    if (typeof date === 'string') return date; // Already a string, return as-is
    if (date instanceof Date) return date.toISOString();
    return undefined;
  };
  
  return {
    item_id: item.id,
    user_id: item.clientUserId || undefined,
    connector_id: connector?.id?.toString() || undefined,
    connector_name: connector?.name || undefined,
    connector_image_url: connector?.imageUrl || undefined,
    status: item.status as PluggyItemRecord['status'],
    created_at: toISOString(item.createdAt),
    updated_at: toISOString(item.updatedAt),
    last_updated_at: item.lastUpdatedAt ? toISOString(item.lastUpdatedAt) : null,
    webhook_url: item.webhookUrl || null,
    parameters: item.parameter || null,
    institution_name: connector?.name || undefined,
    institution_url: connector?.institutionUrl || undefined,
    primary_color: connector?.primaryColor || undefined,
    secondary_color: undefined,
  };
}