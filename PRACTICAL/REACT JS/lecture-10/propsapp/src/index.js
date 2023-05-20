import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Functionprops from './components/Functionprops';
import Enjoy from './components/classprops';

const root = ReactDOM.createRoot(document.getElementById('props'));
root.render(
  <React.StrictMode>
    <Functionprops name="Divyesh"/>
    <Enjoy age="23" role="Web Developer"/>
  </React.StrictMode>
);
reportWebVitals();
