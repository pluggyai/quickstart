import React, { useState } from 'react';
import './App.css';
import { PluggyConnectProps, PluggyConnect } from 'react-pluggy-connect';

const { REACT_APP_API_KEY = '', REACT_APP_CONNECT_URL = '' } = process.env;

function App() {
  const [isConnectVisible, setIsConnectVisible] = useState(false);
  const [includeSandbox, setIncludeSandbox] = useState(false);

  const pluggyConnectWidgetProps: PluggyConnectProps = {
    url: REACT_APP_CONNECT_URL,
    connectToken: REACT_APP_API_KEY,
    includeSandbox,
    onError: (error) => {
      console.error('Whoops! Pluggy Connect error... ', error);
    },
    onSuccess: (data) => {
      console.log('Yay! Pluggy connect success!', data);
    },
    onOpen: () => {
      console.log('Pluggy Connect modal opened.');
    },
    onClose: () => {
      console.log('Pluggy Connect modal close.');
      setIsConnectVisible(false);
    },
  };

  const openConnectPopup = () => {
    setIsConnectVisible(true);
  };

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
      {isConnectVisible && <PluggyConnect {...pluggyConnectWidgetProps} />}
    </div>
  );
}

export default App;
