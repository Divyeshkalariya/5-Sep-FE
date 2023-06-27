import axios from 'axios';
import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function App() {

  // destracturing of state
  const [mobiledata, setMobiledata] = useState([])

  useEffect(() => {
    //fetch data from local broswer api json-server api using axios
    axios.get("http://localhost:3201/mobiledata")
      .then((response) => {
        setMobiledata(response.data)
      });
  }, []);

  return (
    <Fragment>
      <div className='text-center header'>
        <h2>Product list</h2>
      </div>
      <Container fluid="true">

        <Row>
          <Col sm={3} md={3} lg={3} className='category p-5'>
            <h5>Category</h5>
            <ul>
              <li className='text-primary'>Smartphone</li>
              <li>SmartWatch</li>
              <li>Earburds</li>
              <li>Phonecase</li>
            </ul>
          </Col>
          <Col sm={3} md={9} lg={9} className='content'>
            <Row className='p-4 pb-5'>
              {mobiledata && mobiledata.map((item) => {
                return (
                  <Col sm={10} md={4} lg={4} className='col-10 mx-auto'>
                    <Card className='col-10 mx-auto mt-4'>
                      <div className='card-header' align="center" key={item.id}>
                        <img src={item.image} alt={item.name} className='img-fluid' />
                      </div>
                      <div className='card-body'>
                      <h4> {item.name}</h4>
                        <h5> &#8377; {item.offerprice} &nbsp; <del>{item.price}</del> <h6 className='text-success'>{item.off}</h6></h5>
                      </div>
                      <div className='card-footer' align="end">
                        <Button type='button' className='btn-sm'>Add to cart</Button>
                      </div>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>

      </Container>
    </Fragment>
  );
}

export default App;
