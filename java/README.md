# Pluggy Quickstart - Java

A command-line walkthrough of the Pluggy API with the [pluggy-java](https://github.com/pluggyai/pluggy-java) SDK: it lists connectors, creates an item on the Pluggy Bank sandbox connector, waits for it to sync, prints its accounts, transactions and identity, and deletes the item.

## Prerequisites

- Java 11+
- A Pluggy application: create one at [dashboard.pluggy.ai](https://dashboard.pluggy.ai) to get its **Client ID** and **Client Secret**
- `pluggy-java` is published to GitHub Packages, so Maven needs a GitHub token with `read:packages` in `~/.m2/settings.xml`. See the [pluggy-java install notes](https://github.com/pluggyai/pluggy-java#install).

## Configuration

Credentials are read from environment variables; nothing is stored in the source.

| Variable | Required | What it is |
|----------|----------|------------|
| `PLUGGY_CLIENT_ID` | yes | Client ID of your Pluggy application |
| `PLUGGY_CLIENT_SECRET` | yes | Client secret of your Pluggy application. Keep it out of source control and logs |
| `PLUGGY_WEBHOOK_URL` | no | Public HTTPS URL that receives the webhooks of the item this example creates |

The program stops with a message naming the variable if a required one is missing.

## Run

```bash
export PLUGGY_CLIENT_ID=...
export PLUGGY_CLIENT_SECRET=...
# optional
export PLUGGY_WEBHOOK_URL=https://your-backend.example.com/pluggy/webhooks

./mvnw spring-boot:run
```

If you set `PLUGGY_WEBHOOK_URL`, verify the requests it receives as described in [Webhook security](https://docs.pluggy.ai/en/docs/developer-tools/webhook-security).

## Learn more

- [Pluggy documentation](https://docs.pluggy.ai)
- [Server-side SDKs](https://docs.pluggy.ai/en/docs/developer-tools/server-sdks.md)
