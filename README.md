# Pluggy Quickstart

[Pluggy](https://pluggy.ai) is the fastest way to add Open Finance Brasil and account aggregation to your application. This repository has one maintained reference app you can deploy in one click, and a set of prompts that let your coding agent build the same integration in your own stack.

> Looking for the API reference instead? Head to [docs.pluggy.ai](https://docs.pluggy.ai).

---

## Contents

- [Get started](#get-started)
- [One-click deploy](#one-click-deploy)
- [Examples in this repo](#examples-in-this-repo)
  - [Prompts](#prompts)
  - [Other examples](#other-examples)
  - [Where the previous examples went](#where-the-previous-examples-went)
- [Official SDKs and widgets](#official-sdks-and-widgets)
- [AI agent tools](#ai-agent-tools)
- [Reference and community projects](#reference-and-community-projects)
- [Resources](#resources)
- [Contributing](#contributing)

---

## Get started

1. Create an account at [dashboard.pluggy.ai](https://dashboard.pluggy.ai)
2. Create an application to get your **Client ID** and **Client Secret**
3. Deploy the [reference app](#one-click-deploy), or give your coding agent one of the [prompts](prompts) for your stack

Every integration follows the same two-token pattern:

- **API key** (server-side only) — created from `CLIENT_ID` + `CLIENT_SECRET`
- **Connect token** (client-side safe) — scoped to a single widget session, exchanged from the API key

The Connect Widget never sees your `CLIENT_SECRET`.

---

## One-click deploy

The flagship `vercel-quickdeploy-nextjs` example — Next.js 16 + Supabase + Connect Widget + webhook-driven sync — deploys in under two minutes. You supply your Pluggy and Supabase credentials plus an access code and a session secret; the deployed app asks for the access code before showing any data.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-quickdeploy-nextjs&env=PLUGGY_CLIENT_ID,PLUGGY_CLIENT_SECRET,PLUGGY_WEBHOOK_SECRET,NEXT_PUBLIC_SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY,APP_ACCESS_CODE,SESSION_SECRET&envDescription=Pluggy%20credentials%20and%20webhook%20signing%20secret%20from%20dashboard.pluggy.ai%2C%20Supabase%20credentials%20from%20your%20project%20settings%2C%20and%20two%20random%20values%20you%20choose%3A%20APP_ACCESS_CODE%20(login%20code)%20and%20SESSION_SECRET%20(32%2B%20characters)&envLink=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-quickdeploy-nextjs%23environment-variables)

---

## Examples in this repo

This repository has three parts:

1. **One maintained reference project** — [`examples/vercel-quickdeploy-nextjs`](examples/vercel-quickdeploy-nextjs): the full flow (sign-in, Connect Token, Connect Widget, signed webhooks, per-user data in Supabase) in one deployable app. It has CI and is kept current.
2. **Prompts for coding agents** — [`prompts/`](prompts): one self-contained task per integration scenario. Hand one to your coding agent inside your own codebase and it implements the scenario in your stack, following Pluggy's security rules and docs. See [`prompts/README.md`](prompts/README.md).
3. **A few small examples** — a one-file token endpoint and Connect widget snippets, listed below.

### Prompts

| Scenario | Prompt |
|----------|--------|
| Server-side credentials + Connect Token endpoint for the signed-in user | [`prompts/backend-connect-token.md`](prompts/backend-connect-token.md) |
| Pluggy Connect in a web app | [`prompts/connect-widget-web.md`](prompts/connect-widget-web.md) |
| Pluggy Connect in React Native, Flutter, iOS or Android | [`prompts/connect-widget-mobile.md`](prompts/connect-widget-mobile.md) |
| Receiving and verifying webhooks | [`prompts/webhook-receiver.md`](prompts/webhook-receiver.md) |
| Fetching and storing accounts, transactions and other products; disconnecting | [`prompts/sync-financial-data.md`](prompts/sync-financial-data.md) |

### Other examples

| Stack | Path | Notes |
|-------|------|-------|
| Vercel serverless (token only) | [`examples/vercel-node-connect-token`](examples/vercel-node-connect-token) | One-file Connect Token endpoint for signed-in users: verifies the caller's JWT (replace with your auth), binds the token to `clientUserId`, fails closed. Has CI with rejection tests |
| Vanilla HTML | [`frontend/html`](frontend/html) | Drop-in CDN script that asks your authenticated token endpoint for a token |
| React Native (Expo) | [`frontend/react-native-expo`](frontend/react-native-expo) | Expo SDK 54. Being reworked in an open pull request |
| Cordova | [`frontend/cordova`](frontend/cordova) | Apache Cordova iOS. Retirement proposed in an open pull request |

See [`frontend/README.md`](frontend/README.md) for the connect-token flow and the widget options.

### Where the previous examples went

| Previous example | Now |
|------------------|-----|
| `examples/node-nestjs` (NestJS + Postgres) | [`backend-connect-token.md`](prompts/backend-connect-token.md), [`webhook-receiver.md`](prompts/webhook-receiver.md), [`sync-financial-data.md`](prompts/sync-financial-data.md) |
| `examples/vercel-node-mongo` (Vercel + MongoDB) | [`webhook-receiver.md`](prompts/webhook-receiver.md), [`sync-financial-data.md`](prompts/sync-financial-data.md) |
| `examples/aws-sst` (Lambda + DynamoDB) | [`backend-connect-token.md`](prompts/backend-connect-token.md), [`webhook-receiver.md`](prompts/webhook-receiver.md) |
| `java` (Spring Boot + pluggy-java) | [`backend-connect-token.md`](prompts/backend-connect-token.md), [`sync-financial-data.md`](prompts/sync-financial-data.md); SDK at [pluggyai/pluggy-java](https://github.com/pluggyai/pluggy-java) |
| `frontend/flask` | [`backend-connect-token.md`](prompts/backend-connect-token.md), [`connect-widget-web.md`](prompts/connect-widget-web.md) |
| `frontend/nextjs` (Pages Router, unauthenticated `/api/token`) | [`examples/vercel-quickdeploy-nextjs`](examples/vercel-quickdeploy-nextjs), [`backend-connect-token.md`](prompts/backend-connect-token.md), [`connect-widget-web.md`](prompts/connect-widget-web.md) |
| `frontend/react` (Create React App) | [`connect-widget-web.md`](prompts/connect-widget-web.md) |
| `frontend/react-native` (RN 0.66 bare) | [`connect-widget-mobile.md`](prompts/connect-widget-mobile.md) |
| `frontend/flutter` | [`connect-widget-mobile.md`](prompts/connect-widget-mobile.md) |
| `ios` (Swift WebView) | [`connect-widget-mobile.md`](prompts/connect-widget-mobile.md) |

The code of every removed example stays available in this repository's git history. `frontend/nextjs` and `frontend/react` keep a README at their old path that points to the replacement.

---

## Official SDKs and widgets

| Language / target | Source | Package |
|-------------------|--------|---------|
| Node.js / TypeScript (server) | [pluggyai/pluggy-node](https://github.com/pluggyai/pluggy-node) | [`pluggy-sdk`](https://www.npmjs.com/package/pluggy-sdk) |
| Browser JavaScript | [pluggyai/pluggy-js](https://github.com/pluggyai/pluggy-js) | [`pluggy-js`](https://www.npmjs.com/package/pluggy-js) |
| Java | [pluggyai/pluggy-java](https://github.com/pluggyai/pluggy-java) | GitHub Packages |
| .NET / C# | [pluggyai/pluggy-net](https://github.com/pluggyai/pluggy-net) | NuGet |

Connect Widget components:

| Target | Package |
|--------|---------|
| React | [`react-pluggy-connect`](https://www.npmjs.com/package/react-pluggy-connect) |
| React Native | [`react-native-pluggy-connect`](https://www.npmjs.com/package/react-native-pluggy-connect) |
| Browser (CDN / vanilla) | [`pluggy-connect-sdk`](https://docs.pluggy.ai/#pluggy-connect-widget) |

---

## AI agent tools

For coding agents (Claude Code, Cursor, GitHub Copilot, …) building on top of Pluggy:

| Tool | What it is | Install |
|------|------------|---------|
| [pluggyai/agent-skills](https://github.com/pluggyai/agent-skills) | Agent Skills that teach agents how to integrate Pluggy — SDK setup, Connect Widget, Item lifecycle, webhooks, Open Finance data retrieval. Format: [agentskills.io](https://agentskills.io). | `npx skills add pluggyai/agent-skills` |
| [Pluggy docs MCP server](https://docs.pluggy.ai/en/docs/developer-tools/mcp) | Hosted MCP server (`https://mcp.pluggy.ai/mcp`, no API key) that gives any MCP client the live docs, API reference, changelog and recipes. | `claude mcp add --transport http pluggy-docs https://mcp.pluggy.ai/mcp` — [other clients](https://docs.pluggy.ai/en/docs/developer-tools/mcp) |
| [`prompts/`](prompts) | Task prompts in this repo for each integration scenario, written to be run by a coding agent in your own codebase. | Copy or reference a file from [`prompts/`](prompts) |

---

## Reference and community projects

Larger real-world projects that build on top of Pluggy:

| Project | What it is |
|---------|-----------|
| [pluggyai/meu-pluggy](https://github.com/pluggyai/meu-pluggy) — [live](https://meu.pluggy.ai) | Free consumer wallet for Open Finance Brasil. Consent & data management. |
| [pluggyai/use-pluggy-connect](https://github.com/pluggyai/use-pluggy-connect) | React hook wrapper around the Connect Widget. |
| [pluggyai/raycast-pluggy](https://github.com/pluggyai/raycast-pluggy) | Raycast extension that surfaces Pluggy data on the desktop. |

---

## Resources

- [Pluggy Documentation](https://docs.pluggy.ai)
- [Pluggy API Reference](https://docs.pluggy.ai/reference)
- [Pluggy Connect Widget Docs](https://docs.pluggy.ai/#pluggy-connect-widget)
- [Pluggy Dashboard](https://dashboard.pluggy.ai)
- [Pluggy on GitHub](https://github.com/pluggyai) — all public Pluggy repos
- [Pluggy status / changelog](https://docs.pluggy.ai/changelog)

---

## Contributing

This repository is open for contributions. Each project directory is independent, with its own `README.md`, dependencies and instructions; prompts follow the guidelines in [`prompts/README.md`](prompts/README.md). See [`AGENTS.md`](AGENTS.md) for how the repository is laid out.

All PRs require review from `@pluggyai/ramen` and `@pluggyai/tech-leaders` (see [`.github/CODEOWNERS`](.github/CODEOWNERS)).
