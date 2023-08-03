import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const StudentAttendence = () => {

    // GET STUDANTE DATA FROM API
    const [studentdata, setStudentdata] = useState([0])
    const Navigate = useNavigate('');

    function displaydata(){
        axios.get("http://localhost:3220/StudentData")
            .then(res => {
                setStudentdata(res.data)
            })
    }

    useEffect(() => {
        displaydata();
    }, [])


    // DELET STUDENT DATA FROM API
    const Deletdata= (id) => {
        axios.delete(`http://localhost:3220/StudentData/${id}`)
            .then((response) => {
                console.warn(response)
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted',
                    text: 'Delet Successfully',
                })
                displaydata();
            })
    }


return (
    <div>
        <Container fluid="true" id="attendancetable">

            <Col className="col-12 col-md-7 col-lg-7 p-0 m-0">
                <table className='text-center mx-auto'>
                    <thead className='bg-primary'>
                        <tr>
                            <th>No.</th>
                            <th>StudentName</th>
                            <th>Standerd</th>
                            <th>Enrollment No.</th>
                            <th>Attendance</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {studentdata && studentdata.map((item) => {
                            return (
                                <tr key={item.id} >
                                    <td>{item.id}</td>
                                    <td>{item.studentname}</td>
                                    <td>{item.standard}</td>
                                    <td>{item.enno}</td>
                                    {
                                        (item.attend == 'Present' ?
                                            <td style={{ backgroundColor: "green" }}>Present</td> : <td style={{ backgroundColor: "red" }}>Absent</td>)
                                    }
                                    
                                    <td>
                                        <i className='fa fa-pencil text-primary' onClick={() => Navigate(`/admin-login/updateattendence/${item.id}`)}></i>
                                        <span className='fw-bold'> || </span>
                                        <i className='fa fa-trash text-danger' onClick={() => Deletdata(item.id)}></i>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Col>
            <Button type='button' variant='success' href='/' className='showbtn'> &#10594; Show Form</Button>
        </Container>
    </div>
)
}


export default StudentAttendence;
