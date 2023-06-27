import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Layout from '../../Layout';

export default function Product() {

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
            <Layout />
            <Container fluid="true" id='product'>
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
                        <div className='text-center header'>
                            <h2>Product list</h2>
                        </div>
                            {mobiledata && mobiledata.map((item) => {
                                return (
                                    <Col sm={10} md={4} lg={4} className='col-10 mx-auto'>
                                        <Card className='col-10 mx-auto mt-4' key={item.id}>
                                            <div className='card-header' align="center">
                                                <img src={item.image} alt={item.name} className='img-fluid' />
                                            </div>
                                            <div className='card-body'>
                                                <h4> {item.name}</h4>
                                                <h5> &#8377; {item.offerprice} &nbsp; <del>{item.price}</del> 
                                                <div className ='text-success fs-6 mt-2'>{item.off}</div></h5>
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
