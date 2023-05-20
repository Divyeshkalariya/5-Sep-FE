import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import BootstrapApp from './componants/Bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BootstrapApp />
  </>
)

reportWebVitals();
