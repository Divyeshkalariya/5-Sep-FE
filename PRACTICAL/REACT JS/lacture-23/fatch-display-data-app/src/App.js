import react, { Fragment } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contactus from './Components/customer/Contactus';
import ManageContact from './Components/Admin/pages/ManageContact';
import Product from './Components/customer/Product';


function App() {
  return (
    <Fragment> 
      <BrowserRouter>
        <Routes>
        {/* customer */}

          <Route path='/' element={<Product/>}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/contact' element={<Contactus />}/>

        {/* admin */}
        <Route path='/admin-manage-contact' element={<ManageContact/>}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
