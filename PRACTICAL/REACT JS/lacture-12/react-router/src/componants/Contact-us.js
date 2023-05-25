import { MDBContainer,MDBRow,MDBCol,MDBInput,MDBBtn,MDBTextArea } from "mdb-react-ui-kit";
import React from "react";
import contact from "../assets/images/contact-us-page/contact-us.gif"
import { Form } from "react-router-dom";

const Contact = () => {
    return(
        <>
            <MDBContainer id="contactus" className="mb-5" >
                <MDBRow>
                    <MDBCol xs sm={10} md lg={6} className="mx-sm-auto ">
                        <img src={contact} alt="contact-us" className="img-fluid mt-4"/>
                    </MDBCol>
                    <MDBCol xs sm={10} md lg={6} className="mx-sm-auto">
                    <MDBContainer className="mt-5">
                        <h2 className="m-0 p-0">Get In Touch</h2>
                        <hr className="w-50 bg-warning"/>
                        {/* <Form> */}
                            <MDBInput label='Name' id='form1' type='text' className="m-3"/>
                            <MDBInput label='Email' id='form1' type='email' className="m-3"/>
                            <MDBInput label='Subject' id='form1' type='text' className="m-3"/>
                            <MDBTextArea label='Message' id='textAreaExample' rows={4} className="m-3"/>
                            <MDBBtn color='success'>Submit</MDBBtn>
                        {/* </Form> */}
                    </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer fluid className="bg-dark text-center text-white p-3">
                @copyright by MyApp 2023 || All rights are reserved 
            </MDBContainer>
        </>
    )
}

export default Contact;