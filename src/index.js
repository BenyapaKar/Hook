import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppCounter'
// import App from './AppHello'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App initialCount={0}/>
  </React.StrictMode>
);

