import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Sassstyle from './components/sassstyle';
import "../src/style.scss";
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('scss-style'));
root.render(
    <Sassstyle />
);

reportWebVitals();
