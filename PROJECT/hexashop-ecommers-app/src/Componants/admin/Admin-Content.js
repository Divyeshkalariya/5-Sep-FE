import React, { Fragment,useState,useEffect  } from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import AdminFooter from './Admin-Footer'
import axios from 'axios'

export default function AdminContent() {

  //GET CONTACT API LENGTH

  // GET CONTACT LENGTH
  const [contact , setContact] = useState([])
  useEffect( () => {
    axios.get("http://localhost:2602/Contactusdata")
      .then((res)=>{
        setContact(res.data)
      })
  },[])
  // GET CUSTOMER LENGTH
  const [customer , setCustomer] = useState([])
  useEffect( () => {
    axios.get("http://localhost:2602/Accountdata")
      .then((res)=>{
        setCustomer(res.data)
      })
  },[])

  return (
    <Fragment>
      <Container fluid="true" id="admin-content">
        <Container className='my-4 p-5 rounded-2 w-75'>
          <Row >
            <Col className="col-5 shadow p-4 text-center mx-auto rounded-2">
              <i className='fa fa-envelope py-2 px-3 fs-2'></i>
              <h3 className='mt-3 text-primary'>Contacts : <span className='text-warning fs-1'>{contact.length}</span></h3>
            </Col>

            <Col className="col-5 shadow p-4 text-center mx-auto rounded-2">
              <i className='fa fa-user py-2 px-3 fs-2'></i>
              <h3 className='mt-3 text-primary'>Customer : <span className='text-warning fs-1'>{customer.length}</span></h3>
            </Col>

            <Col className="col-5 shadow p-4 text-center mx-auto rounded-2 mt-5">
              <i className='fa fa-comments py-2 px-3 fs-2'></i>
              <h3 className='mt-3 text-primary'>Reviews : <span className='text-warning fs-1'>38</span></h3>
            </Col>

            <Col className="col-5 shadow p-4 text-center mx-auto rounded-2 mt-5">
              <i className='fa fa-first-order py-2 px-3 fs-2'></i>
              <h3 className='mt-3 text-primary'>Orders : <span className='text-warning fs-1'>88</span></h3>
            </Col>
          </Row>
        </Container>

        {/* admin-footer */}
        <AdminFooter/>
      </Container>
    </Fragment>
  )
}
