# Pluggy Connect - Next.js

The Next.js (Pages Router) project that lived here exposed `/api/token` to any caller: whoever reached the deployment could get Connect Tokens for your Pluggy application, with no user behind them. It was replaced by:

- **Runnable Next.js reference:** [`examples/vercel-quickdeploy-nextjs`](../../examples/vercel-quickdeploy-nextjs) — Next.js 16 (App Router) with sign-in, a Connect Token route bound to the signed-in user (`clientUserId`), per-user Items, signed webhooks and one-click deploy.
- **Prompts for your own Next.js app:** [`prompts/backend-connect-token.md`](../../prompts/backend-connect-token.md) (the token route, behind your authentication) and [`prompts/connect-widget-web.md`](../../prompts/connect-widget-web.md) (the widget, with [`react-pluggy-connect`](https://www.npmjs.com/package/react-pluggy-connect) rendered client-side).

The previous project is in this repository's git history.
