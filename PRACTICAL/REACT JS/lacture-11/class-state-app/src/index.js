import React from 'react';
import ReactDOM from 'react-dom/client';
import "./componants/style.css";
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import ClsState from './componants/class-state';

const root = ReactDOM.createRoot(document.getElementById('class-state'));
root.render(
  <React.StrictMode>
    <ClsState />
  </React.StrictMode>
);

reportWebVitals();
