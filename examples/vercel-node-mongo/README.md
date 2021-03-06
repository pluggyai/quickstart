# Vercel Node.js MongoDB Example

This is an example [Vercel](https://vercel.com) application using [Pluggy Node.js SDK](https://github.com/pluggyai/pluggy-node) to save all created items in a MongoDB collection to make them available for querying.

## Installation

Clone the repo, fill the `.env` file and run the following:

```
npm i
vercel dev
```

## Usage

- Setup a [Pluggy Webhook](https://docs.pluggy.ai/#webhooks) to hit `/api/notifications`

- Use `/api/items` to query, with query parameters `from` (timestamp), `skip` (integer) and `size` (integer >= 20)

Example requests:

```bash
curl -H "Authorization: Bearer my-secured-token" 'http://localhost:3000/api/items?from=2020-03-17T15:58:13.070Z&size=5'
curl -H "Authorization: Bearer my-secured-token" 'http://localhost:3000/api/items?from=2020-01-01T00:01:00.000Z&skip=100'
curl -H "Authorization: Bearer my-secured-token" 'http://localhost:3000/api/items?from=2020-01-01T00:01:00.000Z&size=10&skip=5'
```

## Deploy

Deploy your own Docusaurus project with Vercel in a matter of minutes by just setting environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/pluggyai/quickstart/tree/master/examples/vercel-node-mongo)
