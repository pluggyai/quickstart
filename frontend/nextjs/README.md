# React Pluggy Connect Example

This an example app that showcases the usage of the Pluggy Connect with [Next.js](https://github.com/vercel/next.js). It uses the package `react-pluggy-connect` on the client-side to instantiate the UI widget and `pluggy-sdk` on the server-side to create connect tokens.

## Setup

Create an `.env` file using `.env.example` as template and fill with Pluggy **CLIENT_ID** and **CLIENT_SECRET** credentials.

```
npm install
```

## Run it

```
npm run dev
```

Then, the app will open in a new browser tab on `http://localhost:3000`

## Update Mode

To run Pluggy Connect widget in Update Mode, you should use a connectToken generated with the itemId you want to update, or use the same connectToken used to create the item.

In this example, we generate a new token each time you want to update the last connection.

See more about updating an item [here](https://docs.pluggy.ai/docs/updating-an-item) and check out our [recipies](https://docs.pluggy.ai/recipes/generate-a-connect-token-with-permissions-to-update-an-existing-item)!

---

_This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)._