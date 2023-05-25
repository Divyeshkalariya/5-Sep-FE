import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import wildlife from "../assets/images/blog-page/wild-life.jpg";
import earth from "../assets/images/blog-page/earth.gif";

const Blog = () => {
    return(
        <>
            <MDBContainer id="blog">
                <h1 className="mt-5">Our Latest Blog</h1>
                <hr className="w-25" mx-auto/>
                <MDBRow>
                    <MDBCol xs sm={10} md lg={6} className="mx-sm-auto">
                        <MDBCard>
                            <MDBCardTitle>
                                <img src={wildlife} alt="wild-life" className="img-fluid w-100"/>
                            </MDBCardTitle>
                            <MDBCardBody>
                                <h3>Wild-life</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, fugit ad accusantium quis numquam aut nisi libero assumenda expedita natus sapiente deserunt animi quos explicabo. Aperiam possimus velit similique! Ex?</p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xs sm={10} md lg={6} className="mx-sm-auto">
                            <MDBCard>
                                <MDBCardTitle>
                                <img src={earth} alt="Earth" className="img-fluid"/>
                                </MDBCardTitle>
                                <MDBCardBody>
                                    <h3>Earth</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, fugit ad accusantium quis numquam aut nisi libero assumenda expedita natus sapiente deserunt animi quos explicabo. Aperiam possimus velit similique! Ex?</p>
                                </MDBCardBody>
                            </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer fluid className="bg-dark text-center text-white p-3 mt-5">
                @copyright by MyApp 2023 || All rights are reserved 
            </MDBContainer>
        </>
    )
}

export default Blog;