import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

