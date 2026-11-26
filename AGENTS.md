# AGENTS.md

Guidance for coding agents working **in this repository** (to integrate Pluggy into another codebase, use the files in [`prompts/`](prompts) instead).

## What this repository is

Public Pluggy quickstart: one maintained reference app, a set of agent prompts, a one-file Connect Token endpoint and a few Connect widget snippets. It complements the [Pluggy docs](https://docs.pluggy.ai) (Markdown index: [`llms.txt`](https://docs.pluggy.ai/llms.txt); docs MCP server: `https://mcp.pluggy.ai/mcp`).

```
quickstart/
├── examples/
│   ├── vercel-quickdeploy-nextjs/   # Maintained reference app: Next.js 16 + Supabase, sign-in,
│   │                                # per-user items, signed webhooks. CI: build + auth checks
│   └── vercel-node-connect-token/   # One-file Connect Token function for signed-in users
│                                    # (linked from the docs). CI: typecheck + rejection tests
├── frontend/                        # Connect Widget snippets: html, react-native-expo, cordova,
│                                    # README with widget options; nextjs/ and react/ are README
│                                    # stubs kept for external links
├── prompts/                         # One prompt per integration scenario, for coding agents
└── .github/workflows/               # One CI workflow per project that has one
```

Each project directory is independent (own `package.json`, lockfile, README). `cd` into it first.

## Commands

| Project | Install | Check | Build |
|---------|---------|-------|-------|
| `examples/vercel-quickdeploy-nextjs` | `pnpm install --frozen-lockfile` | `pnpm typecheck`, `pnpm test:auth` (after build) | `pnpm build` |
| `examples/vercel-node-connect-token` | `pnpm install --frozen-lockfile` | `pnpm lint`, `pnpm test` | `pnpm build` |
| `frontend/react-native-expo` | `npm ci` | `npm run lint` | — |

pnpm projects run `pnpm audit` in `preinstall`: an advisory fails the install. Fix it in the same change (bump the direct dependency or its parent; `overrides` as a last resort) and keep the 14-day `minimumReleaseAge` in `pnpm-workspace.yaml`.

## Rules for changes

- **Public repository.** Never commit credentials, tokens, real customer data, or references to private repositories, internal systems or tickets. Example values are placeholders (`your-client-id`, `https://your-backend.example.com`).
- **Credentials only from the environment**, read on the server. Front-end and mobile code never contain a client id, client secret or API key; they receive a Connect Token from a backend endpoint that requires the user's authentication and sets `clientUserId`.
- **Every API route that touches an Item checks ownership**; webhooks are verified (`X-Pluggy-Signature`) before processing. The reference app shows the pattern in `src/app/lib/auth/`.
- **Prompts** (`prompts/*.md`) stay stack-neutral: goal, prerequisites, API contract with links to public docs, security requirements, acceptance checks. Link only public URLs, and check that they resolve.
- Keep commits and PRs in English. Code owners are in [`.github/CODEOWNERS`](.github/CODEOWNERS).
