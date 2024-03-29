import React, { Fragment, useState, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

export default function AdminManageState() {

  const [addstate, setAddstate] = useState([]);
  const Navigate = useNavigate('');

  function displaystate(){
    axios.get("http://localhost:2602/AddState")
      .then((response) => {
        setAddstate(response.data)
      })
  }

  useEffect(() => {
    displaystate();
  }, []);

  // DELET DATA FROM API
  const DeletState = (id) => {
    axios.delete(`http://localhost:2602/AddState/${id}`)
      .then((response) => {
        console.warn(response)
        // swal('State Delet Successfully')
        displaystate();
      })
  }

  return (

    <Fragment>
      <Container fluid="true">
        <Col className='admin-layout-left'>
          <AdminSidebar />
        </Col>
        <Col className='admin-layout-right'>
          <AdminHeader />

          <Container fluid="true" id="admin-content">
            {/* manage category start */}
            <Container fluid="true" id='manage-category'>
              <Col className='my-3'>
                <h1 className='text-center pt-1'>Manage State</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>

              <table className='datatable table table-striped text-center mt-4'>
                <thead className='datatable-head'>
                  <tr>
                    <th>Id</th>
                    <th>State Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='datatable-body'>
                  {addstate && addstate.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.state}</td>
                        <td className='fs-5'>
                          <i className='fa fa-pencil text-primary' onClick={() => Navigate(`/admin-login/admin-update-state/${item.id}`)}></i> <span className='text-dark'> || </span>
                          <i className='fa fa-trash text-danger action' onClick={() => DeletState(item.id)}></i>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              {/* admin-footer */}
              <AdminFooter />
            </Container>
          </Container>
        </Col>
      </Container>
    </Fragment>
  )
}
