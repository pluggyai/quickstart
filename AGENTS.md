# AGENTS.md

Guidance for coding agents working **in this repository** (to integrate Pluggy into another codebase, use the files in [`prompts/`](prompts) instead).

## What this repository is

Public Pluggy quickstart: one maintained reference app and a set of agent prompts that build the same integration in any stack. It complements the [Pluggy docs](https://docs.pluggy.ai) (Markdown index: [`llms.txt`](https://docs.pluggy.ai/llms.txt); docs MCP server: `https://mcp.pluggy.ai/mcp`).

```
quickstart/
├── examples/
│   └── vercel-quickdeploy-nextjs/   # Maintained reference app: Next.js 16 + Supabase, sign-in,
│                                    # per-user items, signed webhooks. CI: build + auth checks
├── prompts/                         # One prompt per integration scenario, for coding agents;
│                                    # full-integration.md chains them into the reference flow
└── .github/workflows/               # CI of the reference app
```

The reference app is the only project with code (own `package.json`, lockfile, README). `cd` into it first.

## Commands

| Project | Install | Check | Build |
|---------|---------|-------|-------|
| `examples/vercel-quickdeploy-nextjs` | `pnpm install --frozen-lockfile` | `pnpm typecheck`, `pnpm test:auth` (after a build with `NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:3124`) | `pnpm build` |

pnpm projects run `pnpm audit` in `preinstall`: an advisory fails the install. Fix it in the same change (bump the direct dependency or its parent; `overrides` as a last resort) and keep the 14-day `minimumReleaseAge` in `pnpm-workspace.yaml`.

## Rules for changes

- **Public repository.** Never commit credentials, tokens, real customer data, or references to private repositories, internal systems or tickets. Example values are placeholders (`your-client-id`, `https://your-backend.example.com`).
- **Credentials only from the environment**, read on the server. Front-end and mobile code never contain a client id, client secret or API key; they receive a Connect Token from a backend endpoint that requires the user's authentication and sets `clientUserId`.
- **Every API route that touches an Item checks ownership**; webhooks are verified (`X-Pluggy-Signature`) before processing. The reference app shows the pattern in `src/app/lib/auth/`.
- **No new example projects.** A scenario in another stack is a prompt, not a second app to maintain: every example removed from here had drifted from the rules above.
- **Prompts** (`prompts/*.md`) stay stack-neutral: goal, prerequisites, API contract with links to public docs, security requirements, acceptance checks. Link only public URLs, and check that they resolve.
- Keep commits and PRs in English. Code owners are in [`.github/CODEOWNERS`](.github/CODEOWNERS).
