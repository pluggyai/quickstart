# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Official Pluggy quickstart repository with integration examples for the Pluggy financial data aggregation API and Connect widget. Complements [Pluggy docs](https://docs.pluggy.ai). Each subdirectory is an independent project with its own dependencies.

## Architecture

```
quickstart/
├── frontend/                    # Client-side integration examples
│   ├── react/                   # React (CRA) + react-pluggy-connect
│   ├── nextjs/                  # Next.js 15 (Pages Router) + pluggy-sdk server-side
│   ├── react-native/            # React Native 0.66 (bare workflow)
│   ├── react-native-expo/       # Expo SDK 54 + expo-router
│   ├── flutter/                 # Flutter WebView integration
│   ├── cordova/                 # Apache Cordova iOS
│   ├── html/                    # Vanilla HTML + CDN script
│   └── flask/                   # Python Flask with templates
├── examples/                    # Backend/deployment examples
│   ├── vercel-quickdeploy-nextjs/  # Full-stack Next.js 16 + Supabase + webhooks
│   ├── node-nestjs/                # NestJS 11 + Sequelize + PostgreSQL
│   ├── aws-sst/                    # AWS Lambda + DynamoDB (SST v1, legacy)
│   ├── vercel-node-connect-token/  # Minimal Vercel serverless token endpoint
│   └── vercel-node-mongo/          # Vercel serverless + MongoDB
├── java/                        # Spring Boot 2.6 + pluggy-java
└── ios/                         # Native Swift iOS app
```

## Key Concepts

**Two-token security model**: All examples implement this pattern:
1. **Access token** (server-side only) - created with CLIENT_ID + CLIENT_SECRET
2. **Connect token** (client-side safe) - scoped to single session, used by widgets

**Environment variables** (common across all projects):
- `PLUGGY_CLIENT_ID` / `PLUGGY_CLIENT_SECRET` - required for all backends
- Project-specific: Supabase keys (quickdeploy), DB credentials (nestjs), AWS creds (sst)

## Commands by Project

Each project is independent. `cd` into the project directory first.

| Project | Dev | Build | Test | Lint |
|---------|-----|-------|------|------|
| frontend/react | `npm start` | `npm run build` | `npm test` | (CRA built-in) |
| frontend/nextjs | `npm run dev` | `npm run build` | - | `npm run lint` |
| frontend/react-native | `npx react-native start` | - | `npm test` | `npm run lint` |
| frontend/react-native-expo | `npm start` | - | - | `npm run lint` |
| examples/vercel-quickdeploy-nextjs | `npm run dev` | `npm run build` | - | `npm run lint` |
| examples/node-nestjs | `npm run start:dev` | `npm run build` | `npm test` | `npm run lint` |
| examples/aws-sst | `npm start` | `npm run build` | `npm test` | - |
| java/ | `./mvnw spring-boot:run` | `./mvnw package` | `./mvnw test` | - |

NestJS additional: `npm run db:setup` (starts PostgreSQL via docker-compose), `npm run test:e2e`.

## SDK Packages

- **pluggy-sdk** (Node.js) - Server-side SDK, used in backends
- **react-pluggy-connect** - React component for Connect widget
- **react-native-pluggy-connect** - React Native component
- **pluggy-js** - Browser/Node SDK (used in Expo example)
- **pluggy-java** - Java SDK (used in Spring Boot example)

## Notable Patterns

- `examples/vercel-quickdeploy-nextjs` is the most complete example: Next.js App Router, Supabase RLS, webhook-driven data sync, Chakra UI
- `frontend/nextjs` uses Pages Router (older pattern) vs quickdeploy which uses App Router
- `frontend/react-native` is on React Native 0.66 / React 17 (very outdated)
- `examples/aws-sst` uses SST v1 which is deprecated (legacy project)
- `examples/vercel-node-connect-token` and `vercel-node-mongo` use pluggy-sdk 0.7.0 (very old)

## Code Owners

All PRs require review from `@pluggyai/ramen` and `@pluggyai/tech-leaders`.
