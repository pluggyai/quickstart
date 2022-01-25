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

When configuring the `NEXT_PUBLIC_PLUGGY_UPDATE_ITEM_ID` environment variable, the app will automatically update the item with the given ID and intialize the UI widget in `Update Mode`.

This will allow you to test the update flow of the UI widget, requesting you the necessary credentials to update the item.

---

_This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)._