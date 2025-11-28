import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Let op: importeer hier uw app.js

// Zoek de root DOM-node in public/index.html
const container = document.getElementById('root');
const root = createRoot(container);

// Render de hoofdcomponent (App) in de root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Als u een apart CSS-bestand zou gebruiken (niet nodig met Tailwind):
// import './index.css';
