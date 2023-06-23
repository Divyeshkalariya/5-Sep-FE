import { Fragment, useState, useEffect } from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function App() {

  // array distracture
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("  http://localhost:1101/books")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Fragment>
      <div className='pt-4 pb-2'>
        <h1 className='text-center'>Famous Books</h1>
        <hr className='w-25 border border-4 border-info rounded-pill mx-auto' />
      </div>
      <Container className= "pb-5">
        <Row className='row'>
          {data &&
            data.map((books) => {
              return <Card className='col-10 col-sm-9 col-md-4 col-lg-3 mt-4 mx-auto p-0 ms-md-4 ms-lg-5'>
                <div className='card-header' align="center">
                  <img src={books.photo} alt={books.name} className='img-fluid mx-auto' />
                </div>
                <div className='card-body'>
                  <h4>{books.name}</h4>
                  <h6>Author : {books.author}</h6>
                </div>
                <div className='card-footer d-flex justify-content-between align-item-center'>
                  <h5 className='mt-1'>&#8377; {books.price}</h5>
                  <Button className="btn-dark ">Add to cart</Button>
                </div>
              </Card>
            })}
        </Row>
      </Container>
    </Fragment>
  );
}


