# Pluggy - AWS Serverless (SST) Example

AWS serverless infrastructure for Pluggy integration using Lambda, DynamoDB, and [SST v4](https://sst.dev/).

This example rewrites the previous SST v1 quickstart on the modern Ion engine. Two Lambda functions are exposed via API Gateway:

- `POST /connect-token` — generates a connect token for the Connect Widget
- `POST /notification` — handles Pluggy webhook events and stores items in DynamoDB

## Prerequisites

- Node.js 24+
- pnpm 11+ (the repo pins it via `packageManager`; corepack will activate the right version automatically)
- AWS account with configured credentials ([SST IAM guide](https://sst.dev/docs/iam-credentials))
- Pluggy API credentials from [dashboard.pluggy.ai](https://dashboard.pluggy.ai)

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

   The first install runs `pnpm audit && pnpm audit signatures` via the `preinstall` hook, so any vulnerable or unsigned package will surface immediately.

2. Create a `.env` file with:

   ```
   PLUGGY_CLIENT_ID=...
   PLUGGY_CLIENT_SECRET=...
   AWS_ACCESS_KEY_ID=...
   AWS_SECRET_ACCESS_KEY=...
   AWS_REGION=sa-east-1
   ```

3. Start the local dev environment:

   ```bash
   pnpm dev
   ```

## Architecture

![Architecture](docs/diagram.png)

| Resource | Purpose |
|----------|---------|
| **DynamoDB** | Stores items created via Pluggy (`ItemsTable`) |
| **Lambda (`/connect-token`)** | Issues connect tokens for the widget |
| **Lambda (`/notification`)** | Processes Pluggy webhook events |

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start local Lambda dev environment |
| `pnpm build` | Build the SST app |
| `pnpm deploy` | Deploy the stack to AWS |
| `pnpm remove` | Tear down the deployed stack |

## Resources

- [Pluggy Documentation](https://docs.pluggy.ai)
- [Pluggy Webhooks](https://docs.pluggy.ai/#webhooks)
- [SST Documentation](https://sst.dev/docs)
