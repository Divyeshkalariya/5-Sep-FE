import React from 'react';
import ReactDOM from 'react-dom/client';
import Mdbootdtrap from './component/Mdb';
import reportWebVitals from './reportWebVitals';
import "../node_modules/mdb-ui-kit/css/mdb.min.css";
import "../node_modules/mdb-ui-kit/js/mdb.min.js";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Mdbootdtrap />
  </>
);
reportWebVitals();
