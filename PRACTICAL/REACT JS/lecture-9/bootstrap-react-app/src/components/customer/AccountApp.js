import React from 'react';
import { Container, Button, Row, Form } from 'react-bootstrap';
import accountphoto from "../images/account.gif";
function AccountApp() {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <div className='col-md-5 m-2 p-2 shadow'>
                        <h3 class="text-center">Create Your Account <i className='bi bi-person'></i></h3>
                        <img src={accountphoto} alt='account' style={{ width: "80%", height: "150px" }} />
                    </div>

                    <div className='col-md-6 m-2 ms-5 p-2 shadow'>
                        <Form className='p-4'>
                            <div className='input-group mt-2'>
                                <input type="text" name='email' placeholder='Enter email' required className='form-control' />
                            </div>
                            <div className='input-group mt-2'>
                                <input type="password" name='password' placeholder='Enter password' required className='form-control' />
                            </div>
                            <div className='input-group mt-2'>
                                <input type="submit" name='log' value="Login" className='btn btn-lg btn-primary text-white' />
                                &nbsp;&nbsp;<a href='#'>FogetPassword ?</a>
                            </div>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default AccountApp;