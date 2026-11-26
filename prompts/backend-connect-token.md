# Prompt: server-side Pluggy credentials and a Connect Token endpoint

> Paste this into your coding agent, inside the repository of the backend that will talk to Pluggy.

## Goal

Add Pluggy to this backend so that:

1. the application's Pluggy credentials are used **only on the server**, to obtain and reuse an API key;
2. a **signed-in user** can ask this backend for a Pluggy **Connect Token** created for them, which the front end (web or mobile) uses to open Pluggy Connect.

Nothing else (no UI, no webhooks, no data sync) is in scope; other prompts in this folder cover those.

## Before you write code

- If the Pluggy agent skills are installed (`pluggy-integration`), follow them. If the Pluggy docs MCP server (`https://mcp.pluggy.ai/mcp`) is available, use it to confirm the endpoints below. Otherwise read the linked pages (append `.md` to any docs URL for Markdown).
- Inspect the project and tell me, before editing: the language/framework, how users are authenticated today (session, JWT, provider…), where configuration and secrets are read from, and whether an official Pluggy SDK exists for this language ([Server-side SDKs](https://docs.pluggy.ai/en/docs/developer-tools/server-sdks)). Use the SDK if there is one; otherwise call the HTTP API directly.
- If the project has no user authentication at all, **stop and ask** how callers are identified. Do not create an unauthenticated token endpoint.

## Prerequisites

- A Pluggy application from [dashboard.pluggy.ai](https://dashboard.pluggy.ai) ([Get your API keys](https://docs.pluggy.ai/en/docs/integration-checklist/api-keys)).
- Configuration, read from the environment or the project's secret manager:
  - `PLUGGY_CLIENT_ID` (required)
  - `PLUGGY_CLIENT_SECRET` (required)
  - `PLUGGY_WEBHOOK_URL` (optional, public HTTPS URL; see `webhook-receiver.md`)
  - `PLUGGY_OAUTH_REDIRECT_URI` (optional; needed for mobile apps, see `connect-widget-mobile.md`)
- Add these names (with empty values) to the project's env template and document them. Never write real values into any file.

## API contract

Base URL `https://api.pluggy.ai`. Reference: [Authentication](https://docs.pluggy.ai/en/docs/reference/authentication), [Connect Tokens](https://docs.pluggy.ai/en/docs/security/connect-tokens), recipe [Issue Connect Tokens from your backend](https://docs.pluggy.ai/en/recipes/issue-connect-tokens-from-your-backend).

- `POST /auth` with `{ "clientId", "clientSecret" }` → `{ "apiKey" }`. The API key is sent as `X-API-KEY` on every other call, lives **2 hours**, and must be **cached and reused** until shortly before it expires (requesting one per call hits the `/auth` rate limit). An SDK client usually does this for you; check.
- `POST /connect_token` with header `X-API-KEY` and body `{ "options": { "clientUserId": "<opaque user id>", "webhookUrl"?: "...", "oauthRedirectUri"?: "...", "avoidDuplicates"?: true } }` → `{ "accessToken" }`. Options go **inside `options`**; properties at the root are ignored (except `itemId`, below). The token lives **30 minutes**: create one per connection attempt, never cache or share it.
- To let a user **update** an existing connection, pass `"itemId"` at the root of the body — only after checking that the Item belongs to that user ([Updating an Item](https://docs.pluggy.ai/en/docs/connect-widget/updating-item)).

## What to build

1. A small Pluggy client module (or SDK instance) created once, reading the two credentials from configuration and failing at startup with a clear message naming the missing variable. On serverless platforms where there is no startup step, the endpoint answers `503` while a required variable is missing, before doing anything else (fail closed, never unauthenticated).
2. An endpoint, e.g. `POST /pluggy/connect-token`, that:
   - accepts only `POST` (`405` otherwise, plus the CORS preflight if the front end is on another origin);
   - requires the project's existing authentication and answers `401` without it;
   - if the front end is on another origin, sends CORS headers only for that configured origin, never `*`;
   - for a state-changing `POST` from a browser, is protected the way the project protects its other POSTs (CSRF token, `SameSite` cookies, or an `Origin` check);
   - sets `clientUserId` to the signed-in user's **opaque, stable id** from this system (not an e-mail, CPF or name), taken from the authenticated session, **never from the request body or query**;
   - adds `webhookUrl` / `oauthRedirectUri` only when configured;
   - accepts an optional `itemId` for updates and rejects it (`404`) unless the stored Item belongs to the user;
   - returns only `{ "accessToken": "..." }` to the client.
3. If the project has no table yet that links Items to users, add the minimum: `item_id` (UUID, unique) and `user_id`, so later prompts can check ownership. Ask before creating migrations.

## Security requirements

- `PLUGGY_CLIENT_SECRET` and the API key never leave the server: not in responses, front-end bundles, mobile apps, error messages or logs ([Credentials and API keys](https://docs.pluggy.ai/en/docs/security/credentials)).
- Do not log Connect Tokens, API keys or request bodies of `/auth` / `/connect_token`. Log ids and status codes only.
- Validate any `itemId` received from a client as a UUID before using it in a URL or query.
- Pluggy errors returned to the client are generic; details go to server logs without secrets.

## Acceptance checks (run them and report the results)

- [ ] The endpoint without authentication, or with an invalid or expired credential, returns `401`, and does not call Pluggy.
- [ ] A `clientUserId` sent by the client in the body is ignored: the token is still created for the signed-in user.
- [ ] A method other than `POST` returns `405`; if CORS is enabled, a request from another origin gets no `Access-Control-Allow-Origin`.
- [ ] With an authenticated user it returns `200` and a body with only `accessToken` (run against a real Pluggy application if credentials are available in the environment; otherwise with the Pluggy client mocked, and say so).
- [ ] The request sent to `/connect_token` contains `options.clientUserId` equal to the signed-in user's id (assert in a test with the HTTP client or SDK mocked).
- [ ] An `itemId` that belongs to another user returns `404`; a non-UUID returns `400`.
- [ ] Two calls in a row reuse the cached API key (one `/auth` request).
- [ ] Starting the app without `PLUGGY_CLIENT_SECRET` fails with a message that names the variable.
- [ ] `git grep` finds no client id, secret, API key or token value in the diff, and none of them appears in the logs produced by the tests.
- [ ] Existing tests, linter and type checker still pass.

## Adapt to the user's stack

Follow the project's conventions for routing, dependency injection, configuration and tests. A working version of this endpoint is `src/app/api/token/route.ts` in the reference app, [`examples/vercel-quickdeploy-nextjs`](../examples/vercel-quickdeploy-nextjs); its sign-in is a demo, so take the shape of the route and keep the project's own authentication. Serverless platforms are fine: keep the API-key cache in module scope and accept that a cold start fetches a new key. Do not add a framework or a new auth system to satisfy this prompt.
