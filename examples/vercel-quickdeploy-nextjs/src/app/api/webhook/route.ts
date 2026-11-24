import { NextRequest, NextResponse } from 'next/server';
import { processWebhookEvent } from '@/app/lib/services/webhook-handlers';
import { withErrorHandling } from '@/app/lib/utils/error-handler';
import { hasValidWebhookIds } from '@/app/lib/utils/validation';
import { getWebhookSecrets, verifyPluggySignature } from '@/app/lib/auth/webhook-signature';
import type { WebhookPayload } from '@/app/types/pluggy';

export const runtime = 'nodejs';
export const maxDuration = 30;

// POST: Handle webhook events. Only requests signed by Pluggy are processed.
async function handleWebhook(request: NextRequest) {
    const secrets = getWebhookSecrets();
    if (secrets.length === 0) {
      // Fail closed: without a signing secret nothing can be verified.
      console.error('PLUGGY_WEBHOOK_SECRET is not configured; rejecting webhook');
      return NextResponse.json({ error: 'Webhook receiver is not configured' }, { status: 503 });
    }

    // The signature covers the exact bytes Pluggy sent, so read the raw body first.
    const rawBody = await request.text();
    if (!verifyPluggySignature(rawBody, request.headers.get('x-pluggy-signature'), secrets)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    let payload: WebhookPayload;
    try {
      payload = JSON.parse(rawBody) as WebhookPayload;
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    if (!payload.event || !payload.eventId) {
      console.error('❌ Missing required fields in webhook payload');
      return NextResponse.json(
        { error: 'Missing required fields: event and eventId are required' },
        { status: 400 }
      );
    }

    if (!hasValidWebhookIds(payload)) {
      console.error(`❌ Invalid id in webhook payload for event ${payload.event}`);
      return NextResponse.json(
        { error: 'Invalid id in webhook payload' },
        { status: 400 }
      );
    }

    try {
      // The handlers re-fetch every resource from the Pluggy API with this
      // app's own credentials; the payload is only used as a hint.
      await processWebhookEvent(payload);

      return NextResponse.json({
        received: true,
        event: payload.event,
        eventId: payload.eventId,
        processed: true,
      });
    } catch (error) {
      console.error(`❌ Error processing webhook event ${payload.event}:`, {
        error: error instanceof Error ? error.message : String(error),
        event: payload.event,
        eventId: payload.eventId,
      });

      // Return 500 so Pluggy knows to retry
      return NextResponse.json(
        {
          error: 'Failed to process webhook',
          event: payload.event,
          eventId: payload.eventId,
        },
        { status: 500 }
      );
    }
}

export const POST = withErrorHandling(handleWebhook);
