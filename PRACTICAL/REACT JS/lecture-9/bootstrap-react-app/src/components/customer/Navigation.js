import React from 'react';
import { Container, Button, Row, Form } from 'react-bootstrap';
function Navigation() {
   return (
      <>

         <nav className='nav navbar p-3 shadow navbar-expand-md'>
            <b className='navbar-brand p-2 ms-5'>Flipkart logo</b>
            <Button type="button" className='navbar-toggler  btn  bg-primary' data-bs-toggle="collapse" data-bs-target="#cls">
               <span className='bi bi-grid-3x3 text-white'></span>
            </Button>
            <div className='collapse navbar-collapse' id="cls">
               <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Feedback</li>
                  <li>Reviews</li>
                  <li>Account</li>
                  <li>Contact</li>
               </ul>
            </div>
         </nav>

      </>

   )
}
export default Navigation;