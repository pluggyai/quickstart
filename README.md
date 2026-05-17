# Pluggy Quickstart

[Pluggy](https://pluggy.ai) is the fastest way to add Open Finance Brasil and account aggregation to your application. This repository is a hands-on tour of every officially supported integration shape — pick the one that matches your stack, copy it, and you're integrated in minutes.

> Looking for the API reference instead? Head to [docs.pluggy.ai](https://docs.pluggy.ai).

---

## Contents

- [Get started](#get-started)
- [One-click deploy](#one-click-deploy)
- [Examples in this repo](#examples-in-this-repo)
  - [Frontend — Connect Widget integrations](#frontend--connect-widget-integrations)
  - [Backend — token, webhooks, persistence](#backend--token-webhooks-persistence)
  - [Native mobile](#native-mobile)
- [Official SDKs and widgets](#official-sdks-and-widgets)
- [AI agent tools](#ai-agent-tools)
- [Reference and community projects](#reference-and-community-projects)
- [Resources](#resources)
- [Contributing](#contributing)

---

## Get started

1. Create an account at [dashboard.pluggy.ai](https://dashboard.pluggy.ai)
2. Create an application to get your **Client ID** and **Client Secret**
3. Pick a quickstart below that matches your stack and follow its `README.md`

Every server-side example here implements the same two-token pattern:

- **API key** (server-side only) — created from `CLIENT_ID` + `CLIENT_SECRET`
- **Connect token** (client-side safe) — scoped to a single widget session, exchanged from the API key

The Connect Widget never sees your `CLIENT_SECRET`.

---

## One-click deploy

The flagship `vercel-quickdeploy-nextjs` example — Next.js 16 + Supabase + Connect Widget + webhook-driven sync — deploys in under two minutes. You only need to supply your Pluggy and Supabase credentials.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-quickdeploy-nextjs&env=PLUGGY_CLIENT_ID,PLUGGY_CLIENT_SECRET,NEXT_PUBLIC_SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY&envDescription=Get%20your%20Pluggy%20credentials%20from%20dashboard.pluggy.ai%20and%20Supabase%20credentials%20from%20your%20Supabase%20project%20settings&envLink=https://dashboard.pluggy.ai)

---

## Examples in this repo

### Frontend — Connect Widget integrations

Client-side integrations that drop the Pluggy Connect Widget into a page. See [`frontend/README.md`](frontend/README.md) for the connect-token flow and widget configuration.

| Stack | Path | Notes |
|-------|------|-------|
| Next.js (Pages Router) | [`frontend/nextjs`](frontend/nextjs) | Next.js 15 + server-side token via `/api/token` |
| React | [`frontend/react`](frontend/react) | React 19 + CRA |
| React Native (Expo) | [`frontend/react-native-expo`](frontend/react-native-expo) | Expo SDK 54 + Expo Router |
| React Native (bare) | [`frontend/react-native`](frontend/react-native) | RN 0.66 bare workflow (legacy reference) |
| Flutter | [`frontend/flutter`](frontend/flutter) | Flutter + WebView |
| Vanilla HTML | [`frontend/html`](frontend/html) | Drop-in CDN script |
| Flask | [`frontend/flask`](frontend/flask) | Python Flask + server-rendered templates |
| Cordova | [`frontend/cordova`](frontend/cordova) | Apache Cordova iOS |

### Backend — token, webhooks, persistence

Server-side examples that issue connect tokens, receive Pluggy webhooks, and persist items / transactions.

| Stack | Path | Notes |
|-------|------|-------|
| Vercel + Next.js + Supabase | [`examples/vercel-quickdeploy-nextjs`](examples/vercel-quickdeploy-nextjs) | Flagship full-stack example. App Router, RLS-backed Supabase, webhook-driven sync. |
| NestJS + Postgres | [`examples/node-nestjs`](examples/node-nestjs) | NestJS 11 + Sequelize + PostgreSQL via docker-compose |
| Vercel serverless (token only) | [`examples/vercel-node-connect-token`](examples/vercel-node-connect-token) | Minimal connect-token endpoint |
| Vercel + MongoDB | [`examples/vercel-node-mongo`](examples/vercel-node-mongo) | Token endpoint + webhook persistence in MongoDB |
| AWS (SST v4) | [`examples/aws-sst`](examples/aws-sst) | Lambda + DynamoDB on SST Ion |
| Java + Spring Boot | [`java`](java) | Spring Boot 2.6 |

### Native mobile

| Platform | Path |
|----------|------|
| iOS (Swift) | [`ios`](ios) |

---

## Official SDKs and widgets

| Language / target | Source | Package |
|-------------------|--------|---------|
| Node.js / TypeScript (server) | [pluggyai/pluggy-node](https://github.com/pluggyai/pluggy-node) | [`pluggy-sdk`](https://www.npmjs.com/package/pluggy-sdk) |
| Browser JavaScript | [pluggyai/pluggy-js](https://github.com/pluggyai/pluggy-js) | [`pluggy-js`](https://www.npmjs.com/package/pluggy-js) |
| Java | [pluggyai/pluggy-java](https://github.com/pluggyai/pluggy-java) | Maven Central |
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
| [pluggyai/pluggy-mcp](https://github.com/pluggyai/pluggy-mcp) | MCP server exposing the Pluggy API as tools to any MCP-compatible client (Cursor, Claude Desktop, …). | See repo [README](https://github.com/pluggyai/pluggy-mcp#readme) |

---

## Reference and community projects

Larger real-world projects that build on top of Pluggy:

| Project | What it is |
|---------|-----------|
| [pluggyai/my-expenses](https://github.com/pluggyai/my-expenses) — [live](https://pluggy-my-expenses.vercel.app) | Full-stack personal-finance example app. The most complete open Pluggy integration. |
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

This repository is open for contributions. Each subdirectory is an independent project with its own `README.md`, dependencies, and instructions. See [`CLAUDE.md`](CLAUDE.md) for an architectural overview of how the projects are laid out.

All PRs require review from `@pluggyai/ramen` and `@pluggyai/tech-leaders` (see [`.github/CODEOWNERS`](.github/CODEOWNERS)).
