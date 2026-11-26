# Pluggy Connect - React

The runnable React project that lived here was built on Create React App, which is no longer maintained; its toolchain no longer installs cleanly and carries known vulnerabilities. It was replaced by a prompt, so your coding agent adds Pluggy Connect to **your** React app with your build tool and authentication.

- **Prompt:** [`prompts/connect-widget-web.md`](../../prompts/connect-widget-web.md) — uses the [`react-pluggy-connect`](https://www.npmjs.com/package/react-pluggy-connect) component.
- **Backend it needs:** a Connect Token endpoint for the signed-in user — [`prompts/backend-connect-token.md`](../../prompts/backend-connect-token.md), or deploy [`examples/vercel-node-connect-token`](../../examples/vercel-node-connect-token).
- **Runnable reference:** [`examples/vercel-quickdeploy-nextjs`](../../examples/vercel-quickdeploy-nextjs) renders `react-pluggy-connect` in a React (Next.js) app with sign-in and per-user Items.

The core of it:

```tsx
import { PluggyConnect } from 'react-pluggy-connect'

// accessToken comes from YOUR backend, fetched with the user's session right before opening.
<PluggyConnect
  connectToken={accessToken}
  includeSandbox={false}
  onSuccess={({ item }) => refreshConnections()}
  onError={({ message }) => showError(message)}
  onClose={() => setOpen(false)}
/>
```

The previous project is in this repository's git history.
