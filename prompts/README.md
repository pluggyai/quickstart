# Pluggy integration prompts

Each file in this folder is a self-contained task for a coding agent (Claude Code, Cursor, GitHub Copilot, Codex, Windsurf, …). Instead of copying an example project written in a stack you may not use, you hand the prompt to your agent inside **your own codebase** and it implements the scenario there, with your framework, your database and your authentication.

| Prompt | Scenario | Replaces the example(s) |
|--------|----------|-------------------------|
| [`full-integration.md`](full-integration.md) | The whole flow of the reference app in your stack: runs the five prompts below in order, then the screens | — |
| [`backend-connect-token.md`](backend-connect-token.md) | Server-side credentials and a Connect Token endpoint for the signed-in user | `examples/aws-sst` (token function), `examples/node-nestjs` (user endpoint), `java` (client setup), `frontend/flask` (server), `frontend/nextjs` (token route), `examples/vercel-node-connect-token` |
| [`connect-widget-web.md`](connect-widget-web.md) | Opening Pluggy Connect in a web app and handling its result | `frontend/flask` (template), `frontend/nextjs` (page), `frontend/react`, `frontend/html` |
| [`connect-widget-mobile.md`](connect-widget-mobile.md) | Pluggy Connect in React Native / Expo, Flutter, Cordova / Capacitor or a native iOS / Android WebView | `frontend/react-native`, `frontend/react-native-expo`, `frontend/flutter`, `frontend/cordova`, `ios` |
| [`webhook-receiver.md`](webhook-receiver.md) | Receiving and verifying Pluggy webhooks, then syncing from the API | `examples/aws-sst`, `examples/node-nestjs`, `examples/vercel-node-mongo` |
| [`sync-financial-data.md`](sync-financial-data.md) | Fetching and storing accounts, transactions, investments, loans and identity per user, and deleting a connection | `examples/node-nestjs`, `examples/vercel-node-mongo`, `java` |

For a complete, runnable reference of all of them working together, see [`examples/vercel-quickdeploy-nextjs`](../examples/vercel-quickdeploy-nextjs).

Payments (PIX, scheduled and automatic PIX, Smart Transfers) have no prompt here yet; the `pluggy-payments` skill in [pluggyai/agent-skills](https://github.com/pluggyai/agent-skills) and the [Payments docs](https://docs.pluggy.ai/en/docs/payments/overview) cover them.

## How to use a prompt

1. **Give your agent Pluggy's context first** (once per machine or project):
   - **Agent Skills** — the integration patterns Pluggy recommends: `npx skills add pluggyai/agent-skills` ([pluggyai/agent-skills](https://github.com/pluggyai/agent-skills), [docs](https://docs.pluggy.ai/en/docs/developer-tools/ai-skills)).
   - **Docs MCP server** — live access to the documentation and API reference, no API key: `https://mcp.pluggy.ai/mcp` ([setup per tool](https://docs.pluggy.ai/en/docs/developer-tools/mcp)). For example, in Claude Code: `claude mcp add --transport http pluggy-docs https://mcp.pluggy.ai/mcp`.
   - Without either, point the agent at [`https://docs.pluggy.ai/llms.txt`](https://docs.pluggy.ai/llms.txt): every docs page has a Markdown version at the same URL plus `.md`.
2. **Open the agent in your repository** and paste the prompt (or tell it: "Follow `prompts/<file>.md` from github.com/pluggyai/quickstart"). Add one line about your stack if it is not obvious from the code ("We use Django + Postgres; users are `request.user`").
3. **Let it ask.** Each prompt tells the agent to inspect your project and ask before choosing where code goes, which auth to hook into, or which tables to create.
4. **Review against the acceptance checks** at the end of each prompt. The agent is told to run them and report the results; read that report.

Prompts that build on each other say so under *Prerequisites* (for example, the mobile prompt needs the Connect Token endpoint from `backend-connect-token.md`).

## Rules every prompt shares

- `PLUGGY_CLIENT_ID` and `PLUGGY_CLIENT_SECRET` live in your server's secret store / environment, never in source code, the front end, a mobile binary, or logs.
- The front end only ever receives a Connect Token, created by an endpoint that **authenticates the caller** and sets `clientUserId` to that user's opaque id from the session (never from the request). The endpoint fails closed (`503`) when its configuration is missing and allows CORS only for your own origin.
- Every read or delete of an Item checks that the Item belongs to the caller.
- Webhooks are verified with the `X-Pluggy-Signature` HMAC (5-minute tolerance) before anything is processed, the receiver fails closed (`503`) without a signing secret, and the data is re-fetched from the API instead of trusted from the payload.
- No API keys, Connect Tokens, credentials or full financial payloads in logs.

These come from Pluggy's [Security overview](https://docs.pluggy.ai/en/docs/security/overview); the prompts link the specific page for each rule.

## Contributing a prompt

Keep a prompt stack-neutral: describe the contract (endpoints, fields, security rules, checks) and link the docs, instead of pasting framework code. Code snippets are fine only when they are the contract itself (an HTTP request, a signature algorithm). Before linking a docs page, check that it resolves.
