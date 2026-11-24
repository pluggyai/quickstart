import { NextRequest, NextResponse } from 'next/server';
import { getPluggyClient } from '@/app/lib/pluggy/client';
import { withAuth } from '@/app/lib/auth/guards';
import type { Session } from '@/app/lib/auth/session';
import { ConnectTokenOptions } from 'pluggy-sdk';

export const runtime = 'nodejs';
export const maxDuration = 30;

// Creates a Connect Token for the signed-in user. clientUserId is stored on the
// Item Pluggy creates, which is how the item is later tied back to this user.
async function handleToken(_request: NextRequest, session: Session) {
  const pluggyClient = getPluggyClient();

  const tokenOptions: ConnectTokenOptions = { clientUserId: session.userId };

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (appUrl) {
    const webhookUrl = `${appUrl}/api/webhook`;
    if (webhookUrl.startsWith('https://') || process.env.ENABLE_HTTP_WEBHOOK === 'true') {
      tokenOptions.webhookUrl = webhookUrl;
    }
  }

  const connectToken = await pluggyClient.createConnectToken(undefined, tokenOptions);

  return NextResponse.json(connectToken);
}

export const POST = withAuth(handleToken);
