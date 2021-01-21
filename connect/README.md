# Pluggy Connect Quickstart

Here you'll find every posible Pluggy Connect integration with different client-side tools

For most up-to-date and accurate documentation regarding both **Pluggy Connect** and **Connect Token**, please see our [API Reference page](https://docs.pluggy.ai)

## Understanding the connect flow

When integrating the end-to-end Pluggy Connect Widget there is a connect flow that is important to understand. Whenever you want to use the Pluggy API for any operation you'll have to first create an access token using your corresponding `CLIENT_ID` and `CLIENT_SECRET`. This will allow you to create, read, update, delete and manipulate or your users financial data. That's why this access token is intended to only be used from server-side environment, It's really unsecure and/or dangerous to use it from the client-side, since any user that get access to this token can do the same operations as you (involving other users/customers data). 

That's why there is another type of token that is called `connect token`, this one is meant to be use for any client-side Pluggy library and it has only access to create new items but only read/modify the items created in the same session. For any of the libraries listed in this folders and the browser lib [pluggy.js](https://github.com/pluggyai/pluggy-js) you must use this token.

To create this token you can either add a new endpoint in your server that uses a `CLIENT_ID` and `CLIENT_SECRET` generated access token to generate the connect token, you can [check it in the official documentation](https://docs.pluggy.ai/#create-a-connect-token). If your application doesn't have server-side code or you just want to separate it in another server you can [just deploy this project](https://github.com/pluggyai/pluggy-connect-vercel) in minutes with [Vercel](https://vercel.com) and get you're own endpoint for the connect token.

## Usage

### HTML

You can directly import `pluggy-connect.js` from our CDN to a <script> tag, specifying the library version:
  
```html
<script src="https://cdn.pluggy.ai/pluggy-connect/v0.0.7-alpha.0/pluggy-connect.js"></script>
```

After that, the `PluggyConnect` class is globaly available, you can instantiate it with the following:

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

pluggyConnect.init();
```

### React

Install the npm package:

```bash
npm install react-pluggy-connect
```

And then import and use the `PluggyConnect` component like this:

```react
import { PluggyConnect } from 'react-pluggy-connect';

const App = props => {
  const onSuccess = (itemData) => {
    // do something with the financial data
  };
  
  const onError = (error) => {
    // handle the error
  }

  return (
    <PluggyConnect
      connectToken='your-connect-token-here'
      includeSandbox={false}
      onSuccess={onSuccess}
      onError={onError}
    />
  );
};

export default App;
```

## Available options

These are the following option available for all Pluggy Connect libraries:

`connectToken`: **(string)** The connect token generated to create items in a user session

`includeSandbox`: **(boolean)** A flag indicating if sandbox connectors are listed in the widget or not

`onSuccess`: **(Function)** A callback to be executed once the item is created and finished, receives the requested financial data.

`onError`: **(Function)** A callback to be executed with the error after failing creating the item, it could be a service error, invalid credentials, some failed condition, etc.

