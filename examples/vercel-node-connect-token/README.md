# Pluggy - Vercel Connect Token Endpoint

Minimal serverless function that generates [Pluggy Connect Tokens](https://docs.pluggy.ai/#create-a-connect-token). Deploy to Vercel with zero configuration.

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-node-connect-token)

Set your `PLUGGY_CLIENT_ID` and `PLUGGY_CLIENT_SECRET` environment variables during deployment.

## Usage

Once deployed, your endpoint is available at:

```
POST https://your-app.vercel.app/api/token
```

Use this URL as the token endpoint in any frontend quickstart.

## Local Development

```bash
npm install
vercel dev
```

## Live Demo

Sandbox-only example: https://pluggy-connect.vercel.app/api/token

## Resources

- [Pluggy Connect Token Docs](https://docs.pluggy.ai/#create-a-connect-token)
