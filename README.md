# Pluggy Quickstart

Integrate [Pluggy](https://pluggy.ai) into your application in minutes. This repository provides working examples across multiple platforms and frameworks.

For full documentation, see [docs.pluggy.ai](https://docs.pluggy.ai).

## Getting Started

1. Create an account at [dashboard.pluggy.ai](https://dashboard.pluggy.ai)
2. Create an application to get your **Client ID** and **Client Secret**
3. Pick a quickstart below that matches your stack

## Frontend Examples

Client-side integrations using the Pluggy Connect widget. See [frontend/README.md](frontend/README.md) for the connect token flow and widget configuration.

| Framework | Directory | Stack |
|-----------|-----------|-------|
| [Next.js (full-stack)](examples/vercel-quickdeploy-nextjs) | `examples/vercel-quickdeploy-nextjs/` | Next.js 16 + Supabase + Webhooks |
| [Next.js](frontend/nextjs) | `frontend/nextjs/` | Next.js 15 + Pages Router |
| [React](frontend/react) | `frontend/react/` | React 19 + CRA |
| [React Native (Expo)](frontend/react-native-expo) | `frontend/react-native-expo/` | Expo SDK 54 + Expo Router |
| [React Native](frontend/react-native) | `frontend/react-native/` | React Native 0.66 |
| [Flutter](frontend/flutter) | `frontend/flutter/` | Flutter + WebView |
| [HTML](frontend/html) | `frontend/html/` | Vanilla JS + CDN |
| [Flask](frontend/flask) | `frontend/flask/` | Python Flask |
| [Cordova](frontend/cordova) | `frontend/cordova/` | Apache Cordova iOS |

## Backend Examples

Server-side implementations for connect token generation, webhooks, and data persistence.

| Framework | Directory | Stack |
|-----------|-----------|-------|
| [Vercel + Next.js + Supabase](examples/vercel-quickdeploy-nextjs) | `examples/vercel-quickdeploy-nextjs/` | Next.js 16 + Supabase |
| [NestJS](examples/node-nestjs) | `examples/node-nestjs/` | NestJS 11 + PostgreSQL |
| [Vercel Serverless (Token)](examples/vercel-node-connect-token) | `examples/vercel-node-connect-token/` | Vercel + Node.js |
| [Vercel + MongoDB](examples/vercel-node-mongo) | `examples/vercel-node-mongo/` | Vercel + MongoDB |
| [AWS (SST)](examples/aws-sst) | `examples/aws-sst/` | Lambda + DynamoDB |
| [Java Spring Boot](java) | `java/` | Spring Boot 2.6 |

## Native Mobile

| Platform | Directory |
|----------|-----------|
| [iOS (Swift)](ios) | `ios/` |

## Quick Deploy

The fastest way to get started is the one-click Vercel deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-quickdeploy-nextjs&env=PLUGGY_CLIENT_ID,PLUGGY_CLIENT_SECRET,NEXT_PUBLIC_SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY&envDescription=Get%20your%20Pluggy%20credentials%20from%20dashboard.pluggy.ai%20and%20Supabase%20credentials%20from%20your%20Supabase%20project%20settings&envLink=https://dashboard.pluggy.ai)

## Resources

- [Pluggy Documentation](https://docs.pluggy.ai)
- [Pluggy Dashboard](https://dashboard.pluggy.ai)
- [Pluggy API Reference](https://docs.pluggy.ai/reference)
- [Pluggy Connect Widget Docs](https://docs.pluggy.ai/#pluggy-connect-widget)
