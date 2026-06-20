# Pluggy Connect for Apache Cordova — retired example

> **This quickstart is no longer maintained as a runnable project.**
> The integration patterns are now published as an [agent skill](https://github.com/pluggyai/agent-skills/tree/main/skills/pluggy-cordova) so they stay up-to-date with whatever Cordova version your app is on.

## Why this changed

The previous `frontend/cordova` example pinned `cordova-ios@7.0.0` and a fixed CDN widget version. It made sense at the time but turned into a maintenance liability — Cordova plugins age fast, the widget pinning drifted, and a "Hello World + Pluggy Connect" wrapper isn't really *running* anywhere on its own.

A skill is version-agnostic: you bring your own up-to-date Cordova project, and the skill teaches the integration on top of it.

## Use the skill

Install in any agent that supports the [Agent Skills](https://agentskills.io/) format (Claude Code, Cursor, GitHub Copilot, …):

```bash
npx skills add pluggyai/agent-skills
```

Then ask:

> Add Pluggy Connect to my Cordova app

Or read it directly: [`pluggyai/agent-skills` → `skills/pluggy-cordova/`](https://github.com/pluggyai/agent-skills/tree/main/skills/pluggy-cordova).

The skill covers:

- WebView configuration (`config.xml` `allow-navigation`, CSP exceptions)
- Widget initialization on `deviceready` with a pinned CDN version
- Token + data flow — keeping the API key off the device, what to do after `onSuccess`, webhook handoff

## You still need a backend that issues connect tokens

The skill covers the Cordova side; the connect token has to come from a server. Any of these still-maintained examples in this repo work:

- [`examples/vercel-node-connect-token`](../../examples/vercel-node-connect-token) — minimal Vercel serverless endpoint
- [`examples/vercel-quickdeploy-nextjs`](../../examples/vercel-quickdeploy-nextjs) — full Next.js + Supabase + webhooks flagship
- [`examples/node-nestjs`](../../examples/node-nestjs) — NestJS + Postgres
- [`examples/aws-sst`](../../examples/aws-sst) — Lambda + DynamoDB on SST v4
- [`java`](../../java) — Spring Boot

## Where the old code lives

The original Cordova source is available in the git history of this directory before this commit. If you genuinely need a starting-point project rather than the skill, an earlier tag of this repo still has it — but the snippets in the skill are the same patterns with current best practice baked in.
