# Pluggy Connect - HTML Example

Minimal integration of the Pluggy Connect widget using vanilla HTML and JavaScript. No build tools required.

## How It Works

1. Loads `pluggy-connect.js` from the Pluggy CDN
2. Asks **your** backend for a Connect Token for the signed-in user
3. Opens the Pluggy Connect widget with that token

The page never holds your Pluggy `CLIENT_ID` / `CLIENT_SECRET` and never chooses the `clientUserId`: your backend sets it from the user's session, so every Item ends up attached to the user who connected it. See [Issue Connect Tokens from your backend](https://docs.pluggy.ai/en/recipes/issue-connect-tokens-from-your-backend).

## Setup

1. You need a Connect Token endpoint that only answers signed-in users. Either:
   - deploy the [Vercel Connect Token example](../../examples/vercel-node-connect-token) (it accepts a JWT of your user), or
   - have your coding agent add one to your backend with [`prompts/backend-connect-token.md`](../../prompts/backend-connect-token.md).
2. In `index.html`, set `CONNECT_TOKEN_URL` and make `getUserAuthHeader()` return your user's credentials (or leave it empty if your backend uses a same-origin session cookie).
3. Serve the page from your app, where the user is signed in.

No `npm install` or build step needed.

## Resources

- [Pluggy Connect widget](https://docs.pluggy.ai/en/docs/connect-widget/environments)
- [Connect Tokens](https://docs.pluggy.ai/en/docs/security/connect-tokens)
- [pluggy-connect.js CDN](https://cdn.pluggy.ai/pluggy-connect/v2.8.2/pluggy-connect.js)
