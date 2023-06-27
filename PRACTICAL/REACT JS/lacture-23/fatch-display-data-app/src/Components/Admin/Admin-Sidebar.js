import React, { Fragment } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <Fragment>
        <Container fluid="true" id='adminsidebar' className='bg-dark text-white'>
        <Col className='text-white text-center category'>
        <h1 className='my-4'>Category</h1>
        <div className=' overflow-y-auto'>
            <ul className='p-0'>
                <li className='mt-2'><Link to="#" className='text-decoration-none'>Manage Customer</Link></li>

                <li className='dropdown mt-2'><Link to="/" data-bs-toggle="dropdown" className=' dropdown-toggle text-decoration-none'>Add Category</Link>
                  <ul className='dropdown-menu p-3' style={{width:"190px"}}>
                  <li><Link to="#" className='text-black text-decoration-none'>Add Category</Link></li>
                  <li className='mt-2'><Link to="#" className='text-black text-decoration-none'>Manage Category </Link></li>
                  </ul>
                </li>
                
                <li className='dropdown mt-2'><Link to="/" data-bs-toggle="dropdown" className=' dropdown-toggle text-decoration-none'>Add Product</Link>
                  <ul className='dropdown-menu p-3' style={{width:"190px"}}>
                    <li><Link to="#" className='text-black text-decoration-none'>Add Product</Link></li>
                    <li className='mt-2'><Link to="#" className='text-black text-decoration-none'>Manage Products</Link></li>
                  </ul>
                </li>
                
                <li className='mt-2'><Link to="#" className='text-decoration-none'>Manage Orders</Link></li>
                
                <li className='mt-2'><Link to="#" className='text-decoration-none'>Manage Reviews</Link></li>
                
                <li className='mt-2'><Link to="/admin-manage-contact" className='text-decoration-none'>Manage Contact</Link></li>
            </ul>
        </div>
      </Col>
        </Container>
    </Fragment>
  )
}
