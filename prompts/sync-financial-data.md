# Prompt: fetch and store a user's financial data, and let them disconnect

> Paste this into your coding agent, inside the repository of the backend that stores Pluggy data.

## Goal

For each Item a user connected, keep a local copy of the products this app needs (accounts, transactions, and optionally credit card bills, investments, loans, identity), serve it only to that user, and let the user delete the connection.

## Prerequisites

- [`backend-connect-token.md`](backend-connect-token.md): server-side client and `item_id` → `user_id` mapping.
- [`webhook-receiver.md`](webhook-receiver.md): verified webhooks that trigger the sync. Without webhooks, sync after `onSuccess` and on a schedule, and say so.

## Before you write code

- If the Pluggy agent skills (`pluggy-open-finance`, `pluggy-integration`) or the docs MCP server (`https://mcp.pluggy.ai/mcp`) are available, use them for field names and pagination details.
- Inspect the project and tell me: database and migration tool, existing models, and **which products the app actually needs**. Store only those ([Data protection](https://docs.pluggy.ai/en/docs/security/data-protection)). Ask before creating tables.

## Contract

Base URL `https://api.pluggy.ai`, header `X-API-KEY`. Docs per product: [Item](https://docs.pluggy.ai/en/docs/connections/item), [Item lifecycle](https://docs.pluggy.ai/en/docs/connections/item-lifecycle), [Accounts](https://docs.pluggy.ai/en/docs/products/accounts), [Transactions](https://docs.pluggy.ai/en/docs/products/transactions), [Credit card bills](https://docs.pluggy.ai/en/docs/products/credit-card-bills), [Investments](https://docs.pluggy.ai/en/docs/products/investments), [Investment transactions](https://docs.pluggy.ai/en/docs/products/investment-transactions), [Loans](https://docs.pluggy.ai/en/docs/products/loans), [Identity](https://docs.pluggy.ai/en/docs/products/identity), [Data sync](https://docs.pluggy.ai/en/docs/integration-checklist/data-sync), [Consent management](https://docs.pluggy.ai/en/docs/integration-checklist/consent-management).

- `GET /items/{id}` — status, connector, `clientUserId`.
- `GET /accounts?itemId=` — accounts of an Item.
- `GET /v2/transactions?accountId=` — cursor pagination, up to 500 per page; follow `next` until `null`. For incremental sync use `createdAtFrom` (or the webhook's `createdTransactionsLink`), not `dateFrom`: transactions can arrive days after their `date`. The page-based `GET /transactions` is deprecated.
- `GET /bills?accountId=`, `GET /investments?itemId=`, `GET /investments/{id}/transactions`, `GET /loans?itemId=`, `GET /identity?itemId=` — only if needed. A product the institution does not provide can answer `404` or an empty list; treat it as "not available", not as an error.
- `DELETE /items/{id}` — revokes the connection at Pluggy; Pluggy then sends `item/deleted`.
- Credit card transactions can be deleted and re-created with new ids around a statement closing ([statement cycle](https://docs.pluggy.ai/en/docs/products/credit-card-statement-cycle)); upsert by id and apply `transactions/deleted`.

## What to build

1. Tables for the chosen products, keyed by Pluggy ids, each row reachable from an `item_id` that has an owner `user_id`. Use upserts so re-running a sync is harmless.
2. A sync service: `syncItem(itemId)` (item + accounts + chosen products) and `syncNewTransactions(accountId, link or createdAtFrom)`, called by the webhook handlers and after a successful connection.
3. Read endpoints for the app, all behind the project's authentication, that resolve every requested resource to its Item and answer `404` unless the Item's `user_id` is the caller. This includes resources addressed by `accountId`, `investmentId`, etc.
4. `DELETE` endpoint for a connection: check ownership, call `DELETE /items/{id}`, delete local rows (or let `item/deleted` do it, idempotently). Protect it like the project's other state-changing requests (CSRF / `SameSite` / `Origin`).

## Security requirements

- Ownership is checked on the server for every read and delete; ids from the client are validated as UUIDs and never trusted to imply ownership.
- No API key, Connect Token or full payload in logs; log ids, counts and status codes.
- Financial data is personal data: no copies in analytics, error trackers or caches that outlive the user's deletion. When the user deletes a connection, delete its rows.
- Database credentials and Pluggy credentials come from the environment / secret store.

## Acceptance checks (run them and report the results)

- [ ] Every new read endpoint returns `401` without authentication and `404` for an Item, account or investment owned by another user (tests with two users).
- [ ] Transaction sync follows `next` across at least two pages (test with the HTTP client mocked) and uses `/v2/transactions`.
- [ ] Running `syncItem` twice produces no duplicates.
- [ ] `transactions/deleted` removes the rows; `item/deleted` removes the Item and its data.
- [ ] `DELETE` on another user's Item returns `404` and does not call Pluggy.
- [ ] A product answering `404` does not fail the whole sync.
- [ ] Linter, type checker, migrations and existing tests pass.
- [ ] If Pluggy credentials are available in the environment, connect the sandbox (Pluggy Bank, `user-ok` / `password-ok`) and show the stored row counts; otherwise state that this was not run.

## Adapt to the user's stack

Use the project's ORM, migration tool and job runner. Keep the Pluggy-to-database mapping in one module per product so new fields are a one-file change. If the app needs only balances and transactions, do not build tables for the rest.
