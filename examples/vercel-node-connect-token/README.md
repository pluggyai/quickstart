# Pluggy - Vercel Connect Token Endpoint

A one-file serverless function (`api/token.ts`) that creates [Pluggy Connect Tokens](https://docs.pluggy.ai/en/docs/security/connect-tokens) for the users of **your** app. Your frontend calls it right before opening the Pluggy Connect widget.

It follows [Issue Connect Tokens from your backend](https://docs.pluggy.ai/en/recipes/issue-connect-tokens-from-your-backend):

- **Only signed-in users.** The caller must send `Authorization: Bearer <jwt>`, an HS256 JWT signed with `AUTH_JWT_SECRET` that carries `sub` (your opaque user id) and `exp`. Anything else gets `401`.
- **Bound to the caller.** The token is created with `clientUserId` = the JWT's `sub`, so the Item it creates belongs to that user. `clientUserId` is never read from the request body.
- **Updating an Item.** A body `{ "itemId": "<uuid>" }` is accepted only when that Item was created with the caller's `clientUserId`; otherwise `404`.
- **Fail closed.** If `PLUGGY_CLIENT_ID`, `PLUGGY_CLIENT_SECRET` or `AUTH_JWT_SECRET` is missing, every request gets `503`.
- **CORS** is sent only for `ALLOWED_ORIGIN`. Only `POST` (and the `OPTIONS` preflight) is accepted.
- The response is `{ "accessToken": "..." }` and nothing else.

## Replace the authentication with yours

`authenticateRequest()` at the top of `api/token.ts` is the only part you should need to change. The default (an HS256 JWT checked with a shared secret) works when your backend or identity provider can mint such a token for the signed-in user. If your app uses session cookies, RS256 JWTs with a JWKS, or your auth provider's SDK, rewrite that function to return `{ id }` for the signed-in user, or `null`.

Use an opaque internal user id as `sub`, not an e-mail address or a CPF: it is stored on the Item and sent in webhook payloads.

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-node-connect-token&env=PLUGGY_CLIENT_ID,PLUGGY_CLIENT_SECRET,AUTH_JWT_SECRET&envDescription=Pluggy%20credentials%20and%20the%20secret%20that%20signs%20your%20users%27%20JWTs)

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `PLUGGY_CLIENT_ID` | yes | Your application's client id ([dashboard](https://dashboard.pluggy.ai)) |
| `PLUGGY_CLIENT_SECRET` | yes | Your application's client secret. Server-side only |
| `AUTH_JWT_SECRET` | yes | Secret that signs your users' HS256 JWTs. Long and random; never shipped to the browser |
| `ALLOWED_ORIGIN` | no | Origin of your frontend, e.g. `https://app.example.com`. Without it, no CORS header is sent and only same-origin pages can call the endpoint |

## Usage

```js
// In your frontend, with the JWT of the signed-in user
const response = await fetch('https://your-app.vercel.app/api/token', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${userJwt}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({}), // or { itemId } to update one of the user's Items
})
const { accessToken } = await response.json()
// Open Pluggy Connect with accessToken
```

| Status | Meaning |
| --- | --- |
| `200` | `{ accessToken }` |
| `400` | `itemId` is not a UUID |
| `401` | Missing, invalid or expired JWT |
| `404` | `itemId` does not belong to the caller |
| `405` | Method other than `POST` |
| `502` | Pluggy did not create the token |
| `503` | A required environment variable is missing |

## Local development

```bash
pnpm install
pnpm test     # typecheck + checks that unauthenticated calls are rejected
vercel dev
```

`pnpm test` stubs the Pluggy API, so it needs no credentials.

## Resources

- [Connect Tokens](https://docs.pluggy.ai/en/docs/security/connect-tokens)
- [Issue Connect Tokens from your backend](https://docs.pluggy.ai/en/recipes/issue-connect-tokens-from-your-backend)
