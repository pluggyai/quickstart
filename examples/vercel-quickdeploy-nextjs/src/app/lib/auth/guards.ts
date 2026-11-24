import type { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/app/lib/supabase/client';
import { withErrorHandling } from '@/app/lib/utils/error-handler';
import { HttpError } from '@/app/lib/utils/http-error';
import { requireSession, type Session } from './session';

// Requests that change state must come from this app's own pages.
// Browsers always send Origin on POST/DELETE, so a missing one is rejected.
export function assertSameOrigin(request: NextRequest): void {
  if (request.method === 'GET' || request.method === 'HEAD') return;

  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  let originHost: string | null = null;
  try {
    originHost = origin ? new URL(origin).host : null;
  } catch {
    originHost = null;
  }
  if (!originHost || !host || originHost !== host) {
    throw new HttpError(403, 'Cross-origin request rejected');
  }
}

type AuthedHandler = (request: NextRequest, session: Session) => Promise<NextResponse>;

// Every API route except /api/session and /api/webhook goes through this:
// no valid session cookie -> 401, cross-origin write -> 403.
export function withAuth(handler: AuthedHandler) {
  return withErrorHandling(async (request: NextRequest) => {
    assertSameOrigin(request);
    const session = requireSession(request);
    return handler(request, session);
  });
}

// Ownership checks. A record that exists but belongs to someone else answers
// 404, the same as one that does not exist, so ids cannot be probed.
const notFound = () => new HttpError(404, 'Not found');

export async function assertItemOwner(session: Session, itemId: string): Promise<void> {
  const { data, error } = await getSupabaseAdmin()
    .from('pluggy_items')
    .select('user_id')
    .eq('item_id', itemId)
    .maybeSingle();

  if (error) throw new Error(`Failed to check item owner: ${error.message}`);
  if (!data || data.user_id !== session.userId) throw notFound();
}

export async function assertAccountOwner(session: Session, accountId: string): Promise<void> {
  const { data, error } = await getSupabaseAdmin()
    .from('accounts')
    .select('item_id')
    .eq('account_id', accountId)
    .maybeSingle();

  if (error) throw new Error(`Failed to check account owner: ${error.message}`);
  if (!data?.item_id) throw notFound();
  await assertItemOwner(session, data.item_id);
}

export async function assertInvestmentOwner(session: Session, investmentId: string): Promise<void> {
  const { data, error } = await getSupabaseAdmin()
    .from('investments')
    .select('item_id')
    .eq('investment_id', investmentId)
    .maybeSingle();

  if (error) throw new Error(`Failed to check investment owner: ${error.message}`);
  if (!data?.item_id) throw notFound();
  await assertItemOwner(session, data.item_id);
}
