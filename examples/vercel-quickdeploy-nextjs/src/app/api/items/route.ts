import { NextRequest, NextResponse } from "next/server";
import { getPluggyClient } from "@/app/lib/pluggy/client";
import { itemsService } from "@/app/lib/services/items";
import { withAuth, assertItemOwner } from "@/app/lib/auth/guards";
import type { Session } from "@/app/lib/auth/session";
import { isUuid } from "@/app/lib/utils/validation";

export const runtime = "nodejs";
export const maxDuration = 30;

// Lists only the items connected by the signed-in user (their clientUserId).
async function handleGetItems(request: NextRequest, session: Session) {
  const { searchParams } = request.nextUrl;
  const itemId = searchParams.get("itemId");

  if (itemId) {
    if (!isUuid(itemId)) {
      return NextResponse.json(
        { success: false, error: "Item ID must be a valid UUID" },
        { status: 400 }
      );
    }

    await assertItemOwner(session, itemId);
    const pluggyClient = getPluggyClient();
    const item = await pluggyClient.fetchItem(itemId);
    return NextResponse.json({ success: true, data: item });
  }

  const items = await itemsService.getItems(session.userId);

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

async function handleDeleteItem(request: NextRequest, session: Session) {
  const { searchParams } = request.nextUrl;
  const itemId = searchParams.get("itemId");

  if (!itemId) {
    return NextResponse.json(
      { success: false, error: "Item ID is required" },
      { status: 400 }
    );
  }

  if (!isUuid(itemId)) {
    return NextResponse.json(
      { success: false, error: "Item ID must be a valid UUID" },
      { status: 400 }
    );
  }

  await assertItemOwner(session, itemId);

  const pluggyClient = getPluggyClient();

  await pluggyClient.deleteItem(itemId);
  await itemsService.deleteItem(itemId);

  return NextResponse.json({
    success: true,
    message: "Item deleted successfully",
  });
}

export const GET = withAuth(handleGetItems);
export const DELETE = withAuth(handleDeleteItem);
