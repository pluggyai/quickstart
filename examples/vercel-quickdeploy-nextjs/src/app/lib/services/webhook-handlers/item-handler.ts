import { getPluggyClient } from "../../pluggy/client";
import { itemsService } from "../items";
import { syncItemData } from "../item-sync.service";
import { mapItemFromPluggyToDb } from "../mappers/item.mapper";
import { WebhookEventPayload } from "pluggy-sdk";

const pluggyClient = getPluggyClient();

const STATUS_TO_SYNC_DB = ['item/updated', 'item/created'];

export async function handleItemEvent({ itemId, event }: Extract<WebhookEventPayload, {event: 'item/created'}>): Promise<void> {
  const item = await pluggyClient.fetchItem(itemId);
  const itemData = mapItemFromPluggyToDb(item);
  await itemsService.upsertItem(itemData);

  const shouldUpdateDatabase = STATUS_TO_SYNC_DB.includes(event);
  if (shouldUpdateDatabase) {
    await syncItemData(itemId);
  }
}

export async function handleItemDeleted({ itemId }: Extract<WebhookEventPayload, {event: 'item/created'}>): Promise<void> {
  await itemsService.deleteItem(itemId)
}