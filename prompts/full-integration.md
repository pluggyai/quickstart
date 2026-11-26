# Prompt: the whole Pluggy integration, end to end

> Paste this into your coding agent, inside the repository of your application (or the monorepo that holds its backend and front end).

## Goal

Build in this codebase, with its own stack, what the reference app [`examples/vercel-quickdeploy-nextjs`](../examples/vercel-quickdeploy-nextjs) does: a signed-in user connects a financial account through **Pluggy Connect**, the backend learns about it through **signed webhooks**, stores the data **per user**, shows it, and lets the user disconnect.

This prompt is the plan. Each step is one of the other prompts in this folder; follow them in order and finish one before starting the next.

## Before you write code

- If the Pluggy agent skills are installed, follow them. If the Pluggy docs MCP server (`https://mcp.pluggy.ai/mcp`) is available, use it to confirm endpoints and package names. Otherwise read [`https://docs.pluggy.ai/llms.txt`](https://docs.pluggy.ai/llms.txt) (every docs page has a Markdown version at the same URL plus `.md`).
- Inspect the project and tell me, before editing: backend language and framework, front end (web framework, mobile platform, or both), how users sign in, which database and migration tool are in use, and where the app is deployed (the webhook needs a public HTTPS URL).
- Ask which products the app needs (accounts, transactions, credit card bills, investments, loans, identity). Build only those; the reference app stores all of them.
- If the project has **no user authentication**, stop and ask. Every step below depends on knowing who the caller is. Do not add a shared access code or an unauthenticated endpoint to get past this.
- Read the reference app for the shape of the solution, not to copy it: it is Next.js + Supabase, and its sign-in is a demo. Useful entry points: `src/app/api/token/route.ts`, `src/app/api/webhook/route.ts`, `src/app/lib/auth/`, `src/app/lib/services/item-sync.service.ts`.

## Steps

| # | Step | Prompt | Done when |
|---|------|--------|-----------|
| 1 | Server-side credentials and a Connect Token endpoint bound to the signed-in user | [`backend-connect-token.md`](backend-connect-token.md) | Its acceptance checks pass |
| 2 | The "connect your account" entry point | [`connect-widget-web.md`](connect-widget-web.md) for a web front end, [`connect-widget-mobile.md`](connect-widget-mobile.md) for a mobile app; both if the product has both | The sandbox connection reaches the success path |
| 3 | Webhook receiver with signature verification | [`webhook-receiver.md`](webhook-receiver.md) | A signed test event is accepted and an unsigned one is rejected |
| 4 | Storage, sync, read endpoints and disconnect | [`sync-financial-data.md`](sync-financial-data.md) | A sandbox connection ends with rows stored for that user only |
| 5 | Screens for the stored data | This prompt, below | The user sees their own connections and data, and nobody else's |

Report after each step: what was built, the result of that prompt's acceptance checks, and anything you could not verify.

## Step 5: screens

Build them with the project's existing UI components and routing. The reference app has these, each reading from **your backend's** read endpoints (never from Pluggy directly in the browser or the mobile app):

1. **Connections list**: the user's Items with institution name, status and last update, a "connect" action (step 2) and, per Item, "reconnect" (opens Connect with `updateItem` when the Item needs the user's action, see [Item lifecycle](https://docs.pluggy.ai/en/docs/connections/item-lifecycle)) and "disconnect" (the `DELETE` endpoint from step 4, behind a confirmation).
2. **Connection detail**: accounts of that Item, with links to the products chosen above.
3. **Account detail**: balance and paginated transactions; for credit cards, the bills.
4. **Investments, loans, identity**: one list (and detail where the data has one) per product chosen above.
5. **Empty, loading and error states** for each screen, including "the connection is still syncing": data arrives by webhook, so the first load after connecting can be empty. Poll the backend or refresh on a timer for a short while; do not call Pluggy from the client to fill the gap.

## Security requirements

All the requirements of the five prompts apply. The ones that an end-to-end build most often breaks:

- One authentication for everything: the token endpoint, every read endpoint and the disconnect endpoint use the project's real sign-in. The webhook is the only route without a user session, and it is protected by its signature instead.
- Ownership on every request: an Item, account, investment or loan id that belongs to another user answers `404`, in the list and in the detail routes alike.
- The front end and the mobile app never hold `PLUGGY_CLIENT_ID`, `PLUGGY_CLIENT_SECRET` or an API key, and never call `api.pluggy.ai` with one.
- Identity data (name, document, e-mail, addresses) and full transaction payloads stay out of logs, analytics events and error reports.

## Acceptance checks (run them and report the results)

- [ ] The acceptance checks of each prompt used in steps 1 to 4 pass; list them with their result.
- [ ] With two test users, A and B: A connects the sandbox (Pluggy Bank, user `user-ok`, password `password-ok`, see [Sandbox](https://docs.pluggy.ai/en/docs/guides/sandbox)). A sees the connection and its data; B sees nothing, and B's requests for A's Item, account and transactions by id answer `404`.
- [ ] Signed out, every screen from step 5 redirects to sign-in and every endpoint answers `401`.
- [ ] The data on the screens appeared through the webhook path (show the webhook events received and the rows stored), not through a client-side call to Pluggy.
- [ ] A disconnects: the Item is deleted in Pluggy (`GET /items/{id}` answers `404`) and its local rows are gone.
- [ ] A production build of the front end, or a release bundle of the mobile app, contains no client id, client secret or the string `clientSecret`.
- [ ] Linter, type checker, migrations and the project's tests pass.
- [ ] If something could not be run (no Pluggy credentials, no public URL for the webhook, no simulator), say exactly what, and what was verified with mocks instead.

## Adapt to the user's stack

Keep the project's framework, database, authentication and deployment. Do not add Next.js, Supabase or any other part of the reference app's stack because the reference uses it. If a step cannot be done with what the project has (for example, there is no way to expose a public HTTPS webhook URL), stop at that step and say so instead of working around it.
