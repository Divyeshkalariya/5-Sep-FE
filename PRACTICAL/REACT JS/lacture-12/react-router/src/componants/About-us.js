import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const About = () => {
    return(
        <>
            <MDBContainer id="aboutus">
                <MDBRow className="mt-5">
                    <MDBCol xs sm={10} md lg={2} className="mx-sm-auto abouthead ">
                        <h1>About</h1>
                    </MDBCol>
                    <MDBCol xs sm={12} md lg={10} className="mx-sm-auto aboutcontant">
                        <MDBCard className="w-50 shadow-0 shadow-sm-2">
                            <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat tempora sint? Est ipsum doloribus obcaecati modi! Cupiditate aperiam magnam reiciendis rerum recusandae culpa doloribus. Suscipit dicta aliquam recusandae, unde, doloremque earum in iure blanditiis quibusdam nisi deleniti optio impedit.</p>
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

export default About;