import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FontAwesome from 'react-fontawesome';
const myimg = require('./images/application.gif')

reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('external'));
root.render(
  <>
    <section id='regform'>
      <div className='main'>
        <div className='content1'>
          <h1>Regirstation Application </h1>
          <hr />
          <img src={myimg} alt="my-image"></img>
        </div>
        <div className='content2'>
          <h1>Application form</h1>
          <hr />
          <form>
            <input type='text' name='requiredname' placeholder='Name *' pattern='[a-zA-Z]$' required/> <br /><br />
            <input type='email' name='requiredemail' placeholder='Email *' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" required/> <br /><br />
            <input type='text' name='requiredphone' placeholder='Phone No. *' pattern="[0-9]{10}$" required/> <br /><br />
            <textarea rows='7' placeholder='Message'></textarea> <br /><br />
            <input type='submit' name='submit' value='Submit' />
            <input type='reset' name='reset' value='Reset' />
          </form>
        </div>
      </div>
    </section>
    <section id="address">
      <p> <i className='fa fa-map-marker'></i> &nbsp; <b>Address : </b> 501, Mauryansh Elanza, 5th Floor, Nr Parekh Hospital Nr, Shyamal Cross Rd, Satellite, Ahmedabad, Gujarat 380015</p>
      <p> <i className='fa fa-envelope'></i> &nbsp; <b>Email : </b> <a href='mailto:netclus@gmail.com'>netclus@gmail.com</a></p>
      <p> <i className='fa fa-phone-square'></i> &nbsp; <b>Contact : </b> 079 6663 7443</p>
    </section>
  </>
);

