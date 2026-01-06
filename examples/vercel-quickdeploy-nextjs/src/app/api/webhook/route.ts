import { NextRequest, NextResponse } from 'next/server';
import { processWebhookEvent } from '@/app/lib/services/webhook-handlers';
import { withErrorHandling } from '@/app/lib/utils/error-handler';
import type { WebhookPayload } from '@/app/types/pluggy';

export const runtime = 'nodejs';
export const maxDuration = 30;

// POST: Handle webhook events
async function handleWebhook(request: NextRequest) {
    const payload = (await request.json()) as WebhookPayload;

    if (!payload.event || !payload.eventId) {
      console.error('❌ Missing required fields in webhook payload:', payload);
      return NextResponse.json(
        { error: 'Missing required fields: event and eventId are required' },
        { status: 400 }
      );
    }

    // ✅ AWAIT the processing
    try {
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
        stack: error instanceof Error ? error.stack : undefined,
        event: payload.event,
        eventId: payload.eventId,
        payload: JSON.stringify(payload, null, 2),
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
