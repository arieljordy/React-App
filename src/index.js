import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// j'importe le composant BrowserRouter pour manipuler les routes depuis react-router-dom grace à la commande que j'ai tapé avant "npm install -i react-router-dom"

import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
