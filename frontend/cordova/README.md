# Pluggy Connect - Cordova Example

Apache Cordova integration of the Pluggy Connect widget for iOS.

## Prerequisites

- macOS (for iOS builds)
- Node.js
- [Apache Cordova CLI](https://cordova.apache.org/docs/en/latest/guide/cli/)
- Xcode (for iOS simulator/device)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Edit `www/js/index.js` and set `CONNECT_TOKEN_URL` to your token endpoint and `userAuthHeader` to how your app authenticates the signed-in user
   - You can deploy one using the [Vercel Connect Token example](../../examples/vercel-node-connect-token)

3. Build and run on iOS:

```bash
cordova run ios
```

## Resources

- [Pluggy Connect Widget Docs](https://docs.pluggy.ai/#pluggy-connect-widget)
- [Apache Cordova Documentation](https://cordova.apache.org/docs/)
