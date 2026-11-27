# Prompt: Pluggy Connect in a mobile app (React Native / Expo, Flutter, Cordova / Capacitor, native iOS / Android)

> Paste this into your coding agent, inside the repository of the mobile app.

## Goal

Let a signed-in user of this app connect a financial account through **Pluggy Connect**, come back to the app after any bank OAuth step, and see the result.

## Prerequisites

- A backend endpoint that returns `{ "accessToken" }` for the signed-in user, built as in [`backend-connect-token.md`](backend-connect-token.md), configured with `PLUGGY_OAUTH_REDIRECT_URI` set to this app's deep link (or an HTTPS universal / app link). If it does not exist, stop and say so.
- **No Pluggy credentials in the app.** A mobile binary can be unpacked; anything in it is public. The app calls *your* backend, with the user's session, to get a Connect Token.

## Before you write code

- If the Pluggy agent skills or the docs MCP server (`https://mcp.pluggy.ai/mcp`) are available, use them to confirm current package names, props and URL parameters.
- Inspect the project and tell me: platform (React Native bare / Expo, Flutter, Cordova / Capacitor / Ionic, Swift/SwiftUI, Kotlin/Compose), how the app authenticates against its backend, and whether a deep-link scheme or universal / app links are already configured. Ask before adding a scheme.

## Contract

Docs: [Pluggy Connect introduction](https://docs.pluggy.ai/en/docs/connect-widget/introduction), [Environments and configurations](https://docs.pluggy.ai/en/docs/connect-widget/environments), [OAuth support](https://docs.pluggy.ai/en/docs/connect-widget/oauth-support), [Updating an Item](https://docs.pluggy.ai/en/docs/connect-widget/updating-item).

- **React Native / Expo**: the [`react-native-pluggy-connect`](https://www.npmjs.com/package/react-native-pluggy-connect) component, with `connectToken`, `includeSandbox`, `updateItem`, `onOpen`, `onSuccess`, `onError`, `onClose`. It has peer dependencies (`react-native-webview`, `pluggy-js`): install the versions its README asks for with the project's package manager (`npx expo install` in Expo, so they match the SDK). Render it only once a token has arrived, and clear the token on `onClose` so the next attempt fetches a new one.
- **Cordova / Capacitor / Ionic**: the app already runs in a WebView, so Pluggy Connect is the web library: load `pluggy-connect-sdk` (bundled, or its CDN script pinned to an exact version) and call `new PluggyConnect({ connectToken, ... }).init()` after the platform's ready event (`deviceready` in Cordova), as in [`connect-widget-web.md`](connect-widget-web.md). In `config.xml` (or the Capacitor equivalent), `allow-navigation` and `allow-intent` list the Pluggy origins the widget loads and your backend, not `https://*/*`.
- **Flutter, native iOS / Android**: load Pluggy Connect (`https://connect.pluggy.ai`) in a WebView with the Connect Token. How the token, options and the result (item id, error, events) travel between the page and the WebView is not covered by the public docs pages linked here: confirm the current contract with the docs MCP server or Pluggy support before relying on it, and do not guess parameter names. Prefer the `forceOauthInBrowser` option so bank OAuth pages open in the system browser rather than inside the WebView.
- **OAuth return**: the backend creates the token with `oauthRedirectUri` = this app's deep link (`myapp://pluggy/callback`) or HTTPS app link; `localhost` and plain HTTP are rejected when the token is created. The app must handle that link and resume (re-check the connection with the backend).
- Connect Tokens live 30 minutes: fetch one right before opening Connect.

## What to build

1. A screen or modal that fetches a Connect Token from the backend with the user's session and opens Pluggy Connect.
2. Success / error / close handling that returns the user to a sensible place and refreshes the list of connections from the backend. The `item.id` received on the device is a hint; the backend confirms ownership.
3. Deep-link (or app-link) handling for the OAuth return, registered on both iOS and Android, that brings the user back to the connection flow.
4. A development-only switch for `includeSandbox`; it is `false` in release builds.

## Security requirements

- No client id, client secret or API key in the app, its config files, `Info.plist`, `AndroidManifest.xml`, `.env` bundled into the build, or source.
- The token endpoint is called with the user's authentication. Never call a public or shared token endpoint.
- Do not persist the Connect Token (no AsyncStorage, SharedPreferences, Keychain) and do not log it or the item payload in release builds.
- WebView: restrict navigation to Pluggy's Connect origin and the bank pages it opens; do not inject your own JavaScript bridge that exposes app data.

## Acceptance checks (run them and report the results)

- [ ] Searching the source and a release build artifact (or bundle) finds no client id, client secret or the string `clientSecret`.
- [ ] Signed out, the connect action does not request a token.
- [ ] Signed in, a token is requested at open time from the app's backend (verify with the backend mocked in a test, or in a debug run).
- [ ] The deep link / app link opens the app and resumes the flow on both iOS and Android (simulator/emulator run, or explain what could not be run).
- [ ] With the sandbox enabled in a debug build, connecting Pluggy Bank (user `user-ok`, password `password-ok`, see [Sandbox](https://docs.pluggy.ai/en/docs/guides/sandbox)) reaches the success path.
- [ ] `includeSandbox` is off in the release configuration.
- [ ] The project's linter, type checker and tests pass.

## Adapt to the user's stack

Use the app's navigation, networking and state libraries. Keep the Connect integration behind one component/screen so it can be swapped. Do not upgrade the framework or add a new navigation library to satisfy this prompt; if the current version cannot support a requirement, say so and stop.
