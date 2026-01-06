import { NextRequest, NextResponse } from "next/server";
import { getPluggyClient } from "@/app/lib/pluggy/client";
import { itemsService } from "@/app/lib/services/items";
import { withErrorHandling } from "@/app/lib/utils/error-handler";


export const runtime = "nodejs";
export const maxDuration = 30;

async function handleGetItems(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const userId = searchParams.get("userId");
  const itemId = searchParams.get("itemId");

  if (itemId) {
    const pluggyClient = getPluggyClient();
    const item = await pluggyClient.fetchItem(itemId);
    return NextResponse.json({ success: true, data: item });
  }

  const items = await itemsService.getItems(userId || undefined);

  return NextResponse.json({
    success: true,
    data: {
      results: items,
      page: 1,
      pageSize: items.length,
      totalPages: 1,
      totalRecords: items.length,
    },
  });
}

async function handleDeleteItem(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const itemId = searchParams.get("itemId");

  if (!itemId) {
    return NextResponse.json(
      { success: false, error: "Item ID is required" },
      { status: 400 }
    );
  }

  const pluggyClient = getPluggyClient();

  await pluggyClient.deleteItem(itemId);
  await itemsService.deleteItem(itemId);

  return NextResponse.json({
    success: true,
    message: "Item deleted successfully",
  });
}

export const GET = withErrorHandling(handleGetItems);
export const DELETE = withErrorHandling(handleDeleteItem);