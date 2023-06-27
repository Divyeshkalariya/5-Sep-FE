import axios from 'axios';
import { Fragment, useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Layout';

export default function Contactus() {

    const firstname = useRef("");
    const lastname = useRef("");
    const email = useRef("");
    const mobile = useRef("");
    const message = useRef("");
    const Navigate = useNavigate();

    const SandData = () => {

      // store data take from form in variable 
      var insert = {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        mobile: mobile.current.value,
        message: message.current.value,
      }

      // add data in json file via link
      axios.post("http://localhost:3201/Contactusdata", insert)
        .then(() => {
          alert("Thank you for contact us our team will contact you soon")
          Navigate("/")
        });

  }



  return (
    <Fragment>
    <Layout/>
      <Container fluid="true" align="center" >
        <Form className=' p-5 w-75 shadow'>
        <h1 className='py-5'>Contact Us</h1>
          <input type='text' ref={firstname} placeholder='FirstName' className='form-control' /><br />
          <input type='text' ref={lastname} placeholder='LastName' className='form-control' /><br />
          <input type='email' ref={email} placeholder='Email' className='form-control' /><br />
          <input type='text' ref={mobile} placeholder='Mobile No.' className='form-control' /><br />
          <textarea ref={message} placeholder='Message' className='form-control' /> <br />
          <button type='button' className='btn btn-outline-primary' onClick={SandData}>Submit</button>
        </Form>
      </Container>

    </Fragment>
  );
}

