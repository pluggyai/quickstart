import { NextRequest, NextResponse } from 'next/server';
import { getPluggyClient } from '@/app/lib/pluggy/client';
import { withErrorHandling } from '@/app/lib/utils/error-handler';
import { ConnectTokenOptions } from 'pluggy-sdk';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleToken(request: NextRequest) {
  void request;
  const pluggyClient = getPluggyClient();

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const tokenOptions: ConnectTokenOptions = {};
  
  if (appUrl) {
    const webhookUrl = `${appUrl}/api/webhook`;
    if (webhookUrl.startsWith('https://') || process.env.ENABLE_HTTP_WEBHOOK === 'true') {
      tokenOptions.webhookUrl = webhookUrl;
    }
  }

  const connectToken = await pluggyClient.createConnectToken(
    undefined,
    Object.keys(tokenOptions).length > 0 ? tokenOptions : undefined
  );

  return NextResponse.json(connectToken);
}

export const POST = withErrorHandling(handleToken);