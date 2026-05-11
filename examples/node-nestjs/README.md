# Pluggy - NestJS Example

Backend service for Pluggy integration using [NestJS](https://nestjs.com/) with PostgreSQL and webhook support.

## Prerequisites

- Node.js 18+
- Docker and Docker Compose (for PostgreSQL)
- [ngrok](https://ngrok.com/) (for receiving webhooks in development)
- Pluggy API credentials from [dashboard.pluggy.ai](https://dashboard.pluggy.ai)

## Setup

1. Start the PostgreSQL database:

```bash
npm run db:setup
```

2. Copy `.env.example` to `.env` and fill in your credentials:

- `CLIENT_ID` / `CLIENT_SECRET` - Your Pluggy API credentials
- `AUTH_CALLBACK` - Your ngrok forwarding URL (see step 3)
- `DB_*` - Database connection settings (defaults work with docker-compose)

3. Start ngrok to receive webhooks:

```bash
ngrok http 3000
```

Copy the forwarding URL and set it as `AUTH_CALLBACK` in `.env`.

4. Install and run:

```bash
npm install
npm run start:dev
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start in watch mode |
| `npm run start:debug` | Start in debug mode |
| `npm run build` | Compile TypeScript |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run test:cov` | Run tests with coverage |
| `npm run lint` | Lint with ESLint |
| `npm run format` | Format with Prettier |
| `npm run db:setup` | Start PostgreSQL via Docker |

## Resources

- [Pluggy Documentation](https://docs.pluggy.ai)
- [Pluggy Webhooks](https://docs.pluggy.ai/#webhooks)
- [NestJS Documentation](https://docs.nestjs.com)
