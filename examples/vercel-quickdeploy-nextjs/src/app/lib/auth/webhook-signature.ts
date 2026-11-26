import { createHmac, timingSafeEqual } from 'node:crypto';

const TOLERANCE_SECONDS = 5 * 60;

// Verifies the X-Pluggy-Signature header over the raw request body, as described in
// https://docs.pluggy.ai/en/docs/developer-tools/webhook-security.md
// `secrets` is a list so the old and new secret can both be accepted during a rotation.
export function verifyPluggySignature(rawBody: string, header: string | null, secrets: string[]): boolean {
  const parts = new Map(
    String(header ?? '')
      .split(',')
      .map((part) => {
        const i = part.indexOf('=');
        return [part.slice(0, i).trim(), part.slice(i + 1).trim()] as const;
      })
  );

  const t = parts.get('t');
  const received = parts.get('v1');
  if (!t || !received || !/^[0-9]{1,12}$/.test(t) || !/^[0-9a-f]{64}$/.test(received)) return false;

  // Anti-replay: reject a signature more than 5 minutes old.
  if (Math.abs(Math.floor(Date.now() / 1000) - Number(t)) > TOLERANCE_SECONDS) return false;

  const receivedBytes = Buffer.from(received, 'utf8');
  return secrets.some((secret) => {
    const expected = createHmac('sha256', secret).update(`${t}.`).update(rawBody, 'utf8').digest('hex');
    const expectedBytes = Buffer.from(expected, 'utf8');
    return expectedBytes.length === receivedBytes.length && timingSafeEqual(expectedBytes, receivedBytes);
  });
}

export function getWebhookSecrets(): string[] {
  return [process.env.PLUGGY_WEBHOOK_SECRET, process.env.PLUGGY_WEBHOOK_SECRET_PREVIOUS].filter(
    (s): s is string => typeof s === 'string' && s.length > 0
  );
}
