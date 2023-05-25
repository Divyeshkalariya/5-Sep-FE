import { MDBCol, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import erroe from "./assets/images/error-page/404-error.gif";



const Error = () => {
    return(
        <>
            <MDBContainer id="error">
                <MDBCol xs sm={10} md lg={5} className="mx-auto">
                <img src={erroe} alt="erroe 404 page not found" className="img-fluid"/>
                <h2 className="text-center mb-5">Page Not Found</h2>
                </MDBCol>
            </MDBContainer>
            <MDBContainer fluid className="bg-dark text-center text-white p-3">
                @copyright by MyApp 2023 || All rights are reserved 
            </MDBContainer>
        </>
    )
}

export default Error;