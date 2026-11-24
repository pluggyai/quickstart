# Prompt: open Pluggy Connect in a web application

> Paste this into your coding agent, inside the repository of the web front end.

## Goal

Add a "Connect your bank" action that opens the **Pluggy Connect** widget for the signed-in user, and reacts to its result (success, error, close) so the app can show the new connection.

## Prerequisites

- A backend endpoint that returns `{ "accessToken" }` for the signed-in user, built as in [`backend-connect-token.md`](backend-connect-token.md). If it does not exist yet, stop and say so: the widget must never be opened with a token created in the browser or by an unauthenticated endpoint.
- No Pluggy credentials in the front end. The only Pluggy value the browser ever sees is the Connect Token.

## Before you write code

- If the Pluggy agent skills or the docs MCP server (`https://mcp.pluggy.ai/mcp`) are available, use them to confirm the current package names and props.
- Inspect the project and tell me: framework (React, Next.js, Vue, Angular, Svelte, server-rendered templates, plain HTML…), how it calls the backend (and how authentication travels: cookie, header), and where the "connect" entry point should live in the UI. Ask if unclear.

## Contract

Docs: [Pluggy Connect introduction](https://docs.pluggy.ai/en/docs/connect-widget/introduction), [Environments and configurations](https://docs.pluggy.ai/en/docs/connect-widget/environments), [Setup the widget](https://docs.pluggy.ai/en/docs/integration-checklist/setup-widget), [OAuth support](https://docs.pluggy.ai/en/docs/connect-widget/oauth-support), [Updating an Item](https://docs.pluggy.ai/en/docs/connect-widget/updating-item).

- **React / Next.js**: the [`react-pluggy-connect`](https://www.npmjs.com/package/react-pluggy-connect) component. In SSR frameworks render it client-side only.
- **Any other framework or plain HTML**: the [`pluggy-connect-sdk`](https://www.npmjs.com/package/pluggy-connect-sdk) package, or its script from Pluggy's CDN pinned to an exact version (see the package README and [`frontend/html`](../frontend/html) in this repo), then `new PluggyConnect({ connectToken, ... }).init()`.
- Main options: `connectToken` (required), `includeSandbox` (only for development; **off in production**), `updateItem` (an Item id, for reconnecting), and callbacks `onSuccess({ item })`, `onError({ message, data })`, `onClose`, `onOpen`, `onEvent`.
- The token is valid for 30 minutes: request a fresh one each time the user clicks "connect", right before opening the widget.

## What to build

1. A "connect" button (or the project's equivalent) that calls the backend token endpoint with the user's existing authentication, then opens the widget with the returned token.
2. `onSuccess`: tell the backend or simply refresh the user's connection list. Treat `item.id` from the browser as a hint only; the backend learns the Item from Pluggy (webhook or API) and checks ownership itself.
3. `onError` / `onClose`: show a short, non-technical message; log the error code, not the token.
4. Optional, if the app lists connections: a "reconnect" action that asks the backend for a token scoped to that `itemId` and opens the widget with `updateItem`.
5. If the app needs OAuth connectors on mobile browsers, make sure the backend passes `oauthRedirectUri` (an HTTPS page of this app) and that page resumes the flow.
6. If the deployment uses a Content Security Policy, allow only the Pluggy origins the widget actually loads (open it once and read the CSP violations in the browser console), nothing broader.

## Security requirements

- No client id, client secret or API key in front-end code, environment variables exposed to the browser (`NEXT_PUBLIC_*`, `VITE_*`, `REACT_APP_*`…) or HTML.
- `includeSandbox` is driven by an environment flag and is `false` in production builds.
- Do not store the Connect Token in `localStorage`, cookies or URLs; keep it in memory for the widget's lifetime.
- Do not log the token or the item payload to the console in production.
- Consider [Allowed Connect domains](https://docs.pluggy.ai/en/docs/security/connect-allowed-domains) in the Dashboard so other sites cannot embed your Connect.

## Acceptance checks (run them and report the results)

- [ ] A production build of the front end contains none of: the client id, the client secret, the string `clientSecret` (`grep` the build output).
- [ ] Clicking "connect" while signed out does not open the widget and follows the app's normal sign-in behaviour.
- [ ] Signed in, the widget opens with a token fetched at click time (verify in the network tab or a component test with the token endpoint mocked).
- [ ] `onSuccess`, `onError` and `onClose` each leave the UI in a sensible state (component tests or a manual run with the sandbox, `includeSandbox: true` in development: Pluggy Bank, user `user-ok`, password `password-ok`, see [Sandbox](https://docs.pluggy.ai/en/docs/guides/sandbox)).
- [ ] `includeSandbox` is `false` in the production configuration.
- [ ] Linter, type checker and existing tests pass.

## Adapt to the user's stack

Use the project's state management, routing and component library. Wrap the widget in one component or module so the rest of the app only deals with "start connection" and "connection finished".
