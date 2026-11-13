import { hasValidIds } from './webhook.body';

const ITEM_ID = 'a5c763cb-0952-457a-9fb6-5a6f0f6a6f5e';
const ACCOUNT_ID = '03cc0eff-4ec5-495c-adb3-1ef9611624fc';

describe('hasValidIds', () => {
  it('accepts UUIDs', () => {
    expect(
      hasValidIds({
        itemId: ITEM_ID,
        accountId: ACCOUNT_ID,
        transactionIds: [ITEM_ID, ACCOUNT_ID],
      }),
    ).toBe(true);
  });

  it('skips absent fields', () => {
    expect(hasValidIds({})).toBe(true);
    expect(hasValidIds({ itemId: ITEM_ID })).toBe(true);
  });

  it('rejects anything that is not a UUID', () => {
    expect(hasValidIds({ itemId: 'not-a-uuid' })).toBe(false);
    expect(hasValidIds({ itemId: `${ITEM_ID}/accounts` })).toBe(false);
    expect(hasValidIds({ itemId: ITEM_ID, accountId: '' })).toBe(false);
    expect(hasValidIds({ itemId: 123 as unknown as string })).toBe(false);
    expect(hasValidIds({ transactionIds: [ITEM_ID, 'not-a-uuid'] })).toBe(
      false,
    );
    expect(
      hasValidIds({ transactionIds: ITEM_ID as unknown as string[] }),
    ).toBe(false);
  });
});
