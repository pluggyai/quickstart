# Pluggy Connect - React Example

React application showcasing the [react-pluggy-connect](https://www.npmjs.com/package/react-pluggy-connect) widget component.

## Prerequisites

- Node.js 18+
- A Pluggy connect token endpoint (see [backend examples](../../examples))

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

Opens at `http://localhost:3000`.

## How It Works

The app uses the `PluggyConnect` React component from `react-pluggy-connect`. You need a backend endpoint to generate connect tokens — see the [connect token flow](../README.md) for details.

Key file: `src/App.tsx` - renders the PluggyConnect widget with `onSuccess` and `onError` callbacks.

## Resources

- [react-pluggy-connect on npm](https://www.npmjs.com/package/react-pluggy-connect)
- [Pluggy Connect Widget Docs](https://docs.pluggy.ai/#pluggy-connect-widget)

---

_Built with [Create React App](https://github.com/facebook/create-react-app)._
