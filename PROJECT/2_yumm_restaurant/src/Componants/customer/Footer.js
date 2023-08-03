import React, { Fragment } from 'react';
import { MDBContainer, MDBRow,MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function FooterApp() {

    const goToTop = () =>{
        window.scrollTo(0,0)
    }

    return (
        <Fragment>
            <MDBContainer fluid id="footer" className="p-0">
                <MDBRow className="text-white m-0 p-0 pt-4 pb-3">
                    <MDBCol xs sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0" >
                        <h3>Usefull Link</h3>
                        <Link to="/home" className="text-decoration-none text-white" onClick={goToTop}><i className="fa fa-arrow-right"></i> Home</Link> <br />
                        <Link to="/About" className=" text-decoration-none text-white" onClick={goToTop}><i className="fa fa-arrow-right"></i> About</Link> <br />
                        <Link to="/Menu" className=" text-decoration-none text-white" onClick={goToTop}><i className="fa fa-arrow-right"></i> Menu</Link> <br />
                        <Link to="/Contactus" className=" text-decoration-none text-white" onClick={goToTop}><i className="fa fa-arrow-right"></i> Contact</Link> <br />
                        <Link to="/BookingTable" className=" text-decoration-none text-white" onClick={goToTop}><i className="fa fa-arrow-right"></i> Book Table</Link>
                    </MDBCol>
                    <MDBCol xs sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0 pt-5 pt-md-0">
                        <h3>Contact us</h3>
                        <p><i className="fa fa-map-marker"></i> 123 street , Ahamdabad, India</p>
                        <p><i className="fa fa-phone"></i> +91 9576233977</p>
                        <p><i className="fa fa-envelope"></i> 2yumm@gmail.com</p>
                        <p className="social-mediya">
                            <b><i className="fa fa-facebook-f"></i></b>
                            <b><i className="fa fa-instagram"></i></b>
                            <b><i className="fa fa-twitter"></i></b>
                            <b><i className="fa fa-youtube"></i></b>
                        </p>
                    </MDBCol>
                    <MDBCol xs sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0 pt-5 pt-md-0">
                        <h3>Opening</h3>
                        <h5>Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5>Sunday</h5>
                        <p>10AM - 08PM</p>
                    </MDBCol>
                </MDBRow>
                <MDBCol xs sm={12} md lg={12} className="copyright text-center text-white-50 p-2">
                    &copy; Copyright by 2yumm 2023 || All rights are reserved
                </MDBCol>
            </MDBContainer>
        </Fragment>
    )
}
