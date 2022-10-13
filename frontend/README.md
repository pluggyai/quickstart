# Pluggy Connect Quickstart

Here you'll find every possible Pluggy Connect integration with different client-side tools.

For most up-to-date and accurate documentation regarding both **Pluggy Connect** and **Connect Token**, please see
our [API Reference page](https://docs.pluggy.ai/#pluggy-connect-widget)

## Understanding the connect flow

When integrating the end-to-end Pluggy Connect Widget there is a connect flow that is important to understand. Whenever
you want to use the Pluggy API for any operation you'll have to first create an access token using your
corresponding `CLIENT_ID` and `CLIENT_SECRET`. This will allow you to create, read, update, delete and manipulate or
your users financial data. That's why this access token is intended to only be used from server-side environment, It's
really unsecure and/or dangerous to use it from the client-side, since any user that get access to this token can do the
same operations as you (involving other users/customers data).

That's why there is another type of token that is called `connect token`, this one is meant to be use for any
client-side Pluggy library and it has only access to create new items but only read/modify the items created in the same
session. For any of the libraries listed in this folders and the browser
lib [pluggy.js](https://github.com/pluggyai/pluggy-js) you must use this token.

To create this token you can either add a new endpoint in your server that uses a `CLIENT_ID` and `CLIENT_SECRET`
generated access token to generate the connect token, you
can [check it in the official documentation](https://docs.pluggy.ai/#create-a-connect-token). If your application
doesn't have server-side code or you just want to separate it in another server you
can [just deploy this project](https://github.com/pluggyai/pluggy-connect-vercel) in minutes
with [Vercel](https://vercel.com) and get you're own endpoint for the connect token.

## Usage

### HTML

You can directly import `pluggy-connect.js` from our CDN to a `<script>` tag, specifying the library version:

```html
<script src="https://cdn.pluggy.ai/pluggy-connect/v1.3.1/pluggy-connect.js"></script>
```

After that, the `PluggyConnect` class is globally available. You can instantiate it like so:

```js
const pluggyConnect = new PluggyConnect({
  connectToken: 'your-connect-token-here',
  includeSandbox: false, // true to list sandbox/stub connectors for testing
  onSuccess: (itemData) => {
    // do something with the financial data
  },
  onError: (error) => {
    // handle the error
  },
});

// open the Pluggy Connect widget
pluggyConnect.init();
```

### React

Install the npm package:

```bash
npm install react-pluggy-connect
```

Then, you can import and use the `PluggyConnect` component. For example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { PluggyConnect } from 'react-pluggy-connect';

const App = (props) => {
  const onSuccess = (itemData) => {
    // do something with the financial data
  };

  const onError = (error) => {
    // handle the error
  };

  return (
    <PluggyConnect
      connectToken="your-connect-token-here"
      includeSandbox={false}
      onSuccess={onSuccess}
      onError={onError}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Available Configurations

The following properties are available for all Pluggy Connect libraries. For more info, please see
our [documentation](https://docs.pluggy.ai/#pluggy-connect-widget) to find the most up-to-date details.

| Property         | Description                                                                                                                                                                            | Required? | Type                                                          | Default          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------- | ---------------- |
| `connectToken`   | Your Pluggy Connect token, which will be used to access the API.                                                                                                                       | &#9989;   | `string`                                                      | N/A              |
| `includeSandbox` | Whether to display Sandbox connectors in the Connector selection step (not intended for production use)                                                                                | &#128306; | `boolean`                                                     | `false`          |
| `updateItem`     | Item id to update. If specified, the modal will display directly the credentials form of the item to be updated.                                                                       | &#128306; | `string`                                                      | N/A              |
| `connectorTypes` | List of [Connector Types](https://docs.pluggy.ai/#connectors-type). If defined, only Connectors of the specified connector types will be listed.                                       | &#128306; | `ConnectorType[]`                                             | N/A              |
| `countries`      | List of country codes ([ISO-3166-1 alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format). If defined, only Connectors of the specified countries will be listed.          | &#128306; | `CountryCode[]`                                               | N/A              |
| `language`       | Language ISO string used to display the widget. If not specified, the browser language will be used, falling back to `'en'` if not supported.                                          | &#128306; | `string`                                                      | Browser language |
| `onSuccess`      | Function to execute when an [Item](https://docs.pluggy.ai/#items) has been created/updated successfully and retrieved the financial data.                                              | &#128306; | `(data: { item: Item }) => void`                              | No op            |
| `onError`        | Function to execute on a general error loading the widget, or when an Item creation/update status has not been successful (service error, invalid credentials, validation error, etc). | &#128306; | `(error: { message: string; data?: { item: Item } }) => void` | No op            |
| `onOpen`         | Function to execute when the widget modal has been opened.                                                                                                                             | &#128306; | `() => void`                                                  | No op            |
| `onClose`        | Function to execute when the widget modal has been closed.                                                                                                                             | &#128306; | `() => void`                                                  | No op            |
| `onEvent`        | Function to execute to handle custom user interaction events. See the docs for more info.                                                                                     | &#128306; | `(event: string, metadata: { timestamp: number }) => void`    | No op            |
