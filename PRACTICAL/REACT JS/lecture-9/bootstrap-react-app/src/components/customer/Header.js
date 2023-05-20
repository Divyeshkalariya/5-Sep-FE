import React from 'react';
import {Modal, Button, Row, Form,InputGroup } from 'react-bootstrap';
function Header() {
  return (
    <>
      <section id='header'>
        <Row>
          <div className='col-md-3 ps-md-3 ms-md-5'>
            <b>Call me:(+91)9998003879</b>
          </div>
          <div className='col-md-5'>
            <Form>
              <InputGroup className="mt-md-2">
                <Form.Control placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <Button className='bg-white border border-0'  id="button-addon2">
                  <i className='bi bi-search text-dark'></i>
                </Button>
              </InputGroup>
            </Form>

          </div>
          <div className='col-md-3 ms-md-5 mt-1 fs-3'>
            <i className='bi bi-facebook'></i>
            <i className='bi bi-twitter'></i>
            <i className='bi bi-whatsapp'></i>
            <i className='bi bi-instagram'></i>
            <i className='bi bi-youtube'></i>
            <button type="button" data-bs-toggle="modal" data-bs-target="#crt" className="btn btn-sm btn-dark position-relative">
              <i className='bi bi-cart'></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </Row>
      </section>


      {/* Modal*/}

      <div className="modal fade" id="crt">
        <Modal.Dialog>
          <Modal.Header closeButton data-bs-dismiss="modal">
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>

  )
}
export default Header;