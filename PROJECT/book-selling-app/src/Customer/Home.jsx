import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Layout from './Layout';
import axios from 'axios';
import Footer from './Footer';


export default function Home() {

    // DISPALY BOOKs FROM API
    const [data, setData] = useState([0]);
    useEffect(() => {
        axios.get("http://localhost:1200/books")
            .then((res) => {
                setData(res.data)
            })
    }, []);

    return (
        <Fragment>
            <Layout />
            <Container className="pb-5">
                <Row className='row'>
                    {data &&
                        data.map((books) => {
                            return (
                                <Card className='col-10 col-sm-9 col-md-4 col-lg-3 mt-4 mx-auto p-0 ms-md-4 ms-lg-5' key={books.id}>
                                    <div className='card-header' align="center">
                                        <img src={books.photo} alt={books.name} className='img-fluid mx-auto' />
                                    </div>
                                    <div className='card-body'>
                                        <h4>{books.name}</h4>
                                        <h6>Author : {books.author}</h6>
                                    </div>
                                    <div className='card-footer d-flex justify-content-between align-item-center'>
                                        <h5 className='mt-1'>&#8377; {books.price}</h5>
                                        <Button className="btn-dark" href={books.link} target='_blank'>View More</Button>
                                    </div>
                                </Card>
                            )
                        })}
                </Row>
            </Container>
            <Footer />
        </Fragment>
    );
}


