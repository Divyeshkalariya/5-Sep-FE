import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import "../Admin.css";
import AdminSidebar from '../Admin-Sidebar';

export default function ManageContact() {

    const [customerdata, setCustomerdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3201/contactusdata")
            .then((response) => {
                setCustomerdata(response.data)
            })
    })

    return (
        <Fragment>
            <Container fluid="true" className='d-flex'>
            {/* admin sidebar */}
                <AdminSidebar />

            {/* Addcontact */}
                <Container id='addContact' className='mx-auto p-5' align="center">
                    <h2 className='pb-5'>Manage Contact</h2>
                    <h5 className='mb-4 text-start'>Customer Information</h5>
                    <table>
                        <thead>
                            <tr>
                                <th className='text-primary '>Id.</th>
                                <th className='text-primary'>FirstName</th>
                                <th className='text-primary'>LastName</th>
                                <th className='text-primary'>Email</th>
                                <th className='text-primary'>Mobile No.</th>
                                <th className='text-primary'>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerdata && customerdata.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td className='fw-bold'>{item.id}.</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.message}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Container>
            </Container>
        </Fragment>
    )
}
