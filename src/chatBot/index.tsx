import React from 'react';
import ReactDOM from 'react-dom/client';
import Assistant from './Assistant';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Assistant />
  </React.StrictMode>
);
