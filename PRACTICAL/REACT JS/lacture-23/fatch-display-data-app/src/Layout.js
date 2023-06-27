import React, { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Layout() {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary" id='header'>
                <Container>
                    <Navbar.Brand href="#home">CRUD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className='text-decoration-none m-2'>Home</Link>
                            <Link to="/product" className='text-decoration-none m-2'>Product</Link>
                            <Link to="/contact" className='text-decoration-none m-2'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}
