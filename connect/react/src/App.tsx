import React, {useEffect, useState} from 'react';
import { PluggyConnect } from 'react-pluggy-connect';

import './App.css';

/**
 * TODO: replace this URL with your own API returning an { accessToken } object
 * with your Pluggy connect token
 */
const { REACT_APP_CONNECT_TOKEN_API_URL } = process.env

const App = () => {
  const [token, setToken] = useState<string>();
  const [error, setError] = useState();
  const [isConnectVisible, setIsConnectVisible] = useState(false);
  const [includeSandbox, setIncludeSandbox] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch(REACT_APP_CONNECT_TOKEN_API_URL!);
        const {accessToken} = await response.json();
        setToken(accessToken);
      } catch (error) {
        setError(error);
      }
    }

    fetchToken();
  }, []);

  const openConnectPopup = () => {
    setIsConnectVisible(true);
  };

  if (error) {
    return (
    <div className="App">
          <p>There was an error</p>
          <p>{JSON.stringify(error)}</p>
</div>    );
  }

  return !token ? (
    <>
    <div className="App">
      Loading...
      </div>
    </>
  ) : (
    <div className="App">
      <header className="App-header">
        <p>Pluggy Connect Widget Example</p>
      </header>
      <div className="App-content">
        <label>
          <input
            name="includeSandbox"
            type="checkbox"
            checked={includeSandbox}
            onChange={() => setIncludeSandbox((prev) => !prev)}
          />
          Include sandbox connectors
        </label>
        <button className={'button pluggy-connect'} onClick={openConnectPopup}>
          Connect Account
        </button>
      </div>
      {isConnectVisible && <PluggyConnect connectToken={token} includeSandbox={includeSandbox} />}
    </div>
  );
};

export default App;
