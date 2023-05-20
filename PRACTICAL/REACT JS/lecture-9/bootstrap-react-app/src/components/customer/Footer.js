import React from 'react';
import {Container,Button,Row,Form} from 'react-bootstrap';
function Footer()
{
return (
 <>
 
 <section id="footer">

            {/* main footer  */}
            <div className="bottom-footer bg-white p-5">
                <div className="row">
                    <div className="col-md-4 ms-5 p-5">
                        <h2 className="text-dark">Facebook Logo</h2>
                        <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incididun</p>
                        <h5>Connect With Us</h5>
                        <h2><i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-google"></i>
                        </h2>
                    </div>

                    <div className="col-md-7 p-5">
                        <div className="row">
                            <div className="col-md-4">
                                <ul className="footer-navbar">
                                    <li><a href="#" className="text-dark">
                                            <h4>Quick Links</h4>
                                        </a></li>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Aboutus</a></li>
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#">Contactus</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <ul className="footer-navbar">
                                    <li><a href="#" className="text-dark">
                                            <h4>Our Services</h4>
                                        </a></li>
                                    <li><a href="#">Fashion</a></li>
                                    <li><a href="#">24x7 Support</a></li>
                                    <li><a href="#">Your Account</a></li>
                                    <li><a href="#">Download App</a></li>
                                    <li><a href="#">Help</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <ul className="footer-navbar">
                                    <li><a href="#" className="text-dark">
                                            <h4>Our Activities</h4>
                                        </a></li>
                                    <li><a href="#">Biking</a></li>
                                    <li><a href="#">River rafting</a></li>
                                    <li><a href="#">Prek</a></li>
                                    <li><a href="#">Cultural Tours</a></li>
                                    <li><a href="#">Skiping</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* copyright section */}
            <div className="bg-light d-flex justify-content-between p-2">
                <p className="text-center text-dark">@copyright2020 All right reserved certified company </p> 
                <img src="images/002-mastercard.png" className="img-fluid" />
            </div>
        </section>
 

 </>

)
}
export default Footer;