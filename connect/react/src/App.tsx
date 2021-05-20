import React, { useCallback, useEffect, useState } from 'react';
import { PluggyConnect } from 'react-pluggy-connect';

import './App.css';

/**
 * TODO: replace this URL with your own API returning an { accessToken } object
 * with your Pluggy connect token
 */
const {
  REACT_APP_CONNECT_TOKEN_API_URL: connectTokenApiUrl = '',
} = process.env;

if (!connectTokenApiUrl) {
  throw new Error('Missing required REACT_APP_CONNECT_TOKEN_API_URL env var');
}

const App = () => {
  const [token, setToken] = useState<string>();
  const [error, setError] = useState();
  const [isConnectVisible, setIsConnectVisible] = useState(false);
  const [includeSandbox, setIncludeSandbox] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch(connectTokenApiUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            options: {
              clientUserId: "user@example.com"
            }
          })
        });
        const { accessToken } = await response.json();
        setToken(accessToken);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchToken();
  }, []);

  const openConnectPopup = () => {
    setIsConnectVisible(true);
  };

  const onClosePopup = useCallback(() => {
    setIsConnectVisible(false);
  }, []);

  if (error) {
    return (
      <div className="App error">
        <p>There was an error</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!token) {
    return (
      <>
        <div className="App">Loading...</div>
      </>
    );
  }

  return (
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
      {isConnectVisible && (
        <PluggyConnect
          connectToken={token}
          includeSandbox={includeSandbox}
          onClose={onClosePopup}
        />
      )}
    </div>
  );
};

export default App;
