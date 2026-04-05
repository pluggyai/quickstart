# Pluggy Connect - Next.js Example

Full-stack Next.js application with server-side connect token generation and the Pluggy Connect widget.

## Prerequisites

- Node.js 18+
- Pluggy API credentials (Client ID and Client Secret from [dashboard.pluggy.ai](https://dashboard.pluggy.ai))

## Setup

1. Copy the environment file and fill in your credentials:

```bash
cp .env.example .env
```

Required variables:
- `PLUGGY_CLIENT_ID` - Your Pluggy Client ID
- `PLUGGY_CLIENT_SECRET` - Your Pluggy Client Secret

2. Install dependencies:

```bash
npm install
```

## Run

```bash
npm run dev
```

Opens at `http://localhost:3000`.

## How It Works

- **Server-side** (`pages/api/`): Uses `pluggy-sdk` to generate connect tokens securely
- **Client-side**: Uses `react-pluggy-connect` to render the Connect widget
- Supports **Update Mode** for reconnecting existing items ([docs](https://docs.pluggy.ai/docs/updating-an-item))

## Resources

- [Pluggy Connect Widget Docs](https://docs.pluggy.ai/#pluggy-connect-widget)
- [Next.js Documentation](https://nextjs.org/docs)

---

_Built with [Next.js](https://nextjs.org/) (Pages Router)._
