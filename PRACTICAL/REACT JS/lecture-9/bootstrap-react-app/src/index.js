import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from './components/customer/Header';
import Navigation from './components/customer/Navigation';
import Banner from './components/customer/Banner';
import Content from './components/customer/ContentApp';
import Footer from './components/customer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <Banner />
    <Content />
    <Footer />

  {/* modal called here */}
    

  </React.StrictMode>
);

reportWebVitals();
