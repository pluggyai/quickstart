# Nestjs Example

This is a [Nestjs framework](https://nestjs.com/) example application using [Pluggy Node.js SDK](https://github.com/pluggyai/pluggy-node) and the [Pluggy HTTP API](https://docs.pluggy.ai/reference) to be integrated to Pluggy.

We use [postgresql](https://www.postgresql.org/) as SQL database and [sequelize](https://sequelize.org/) as ORM

## Prerequisites

- Docker and Docker compose installed
- Nodejs 16 or higher
- [ngrok](https://www.npmjs.com/package/ngrok) to receive webhooks

## Prepare and run the project

```bash
# To create the database
$ npm run db:setup

# Copy the .env.example into .env
# and replace by your CLIENT_ID and CLIENT_SECRET_ID (.env)

# start ngrok, copy the forwarding url and update the AUTH_CALLBACK (.env)
$ ngrok http 3000

# development
$ npm run start

# watch mode
$ npm run start:dev
```