# Pluggy - Vercel + MongoDB Example

Vercel serverless functions with MongoDB persistence. Receives Pluggy webhook notifications and stores items for querying.

## Prerequisites

- [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`)
- MongoDB instance (e.g., [MongoDB Atlas](https://www.mongodb.com/atlas))
- Pluggy API credentials from [dashboard.pluggy.ai](https://dashboard.pluggy.ai)

## Setup

1. Clone and configure:

```bash
npm install
cp .env.example .env
# Fill in your MongoDB URI and Pluggy credentials
```

2. Run locally:

```bash
vercel dev
```

## API Endpoints

### `POST /api/notifications`

Webhook handler for Pluggy events. Configure in your [Pluggy Dashboard](https://dashboard.pluggy.ai) webhook settings.

### `GET /api/items`

Query stored items. Requires `Authorization: Bearer <token>` header.

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | timestamp | Filter items created after this date |
| `skip` | integer | Pagination offset |
| `size` | integer (>= 20) | Page size |

Example:

```bash
curl -H "Authorization: Bearer my-token" \
  'http://localhost:3000/api/items?from=2024-01-01T00:00:00.000Z&size=10'
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-node-mongo)

## Resources

- [Pluggy Webhooks Docs](https://docs.pluggy.ai/#webhooks)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
