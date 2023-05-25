import React from "react";
import { MDBCarousel, MDBCarouselItem,MDBContainer } from 'mdb-react-ui-kit';

const Home = () => {
    return (
        <>
            <MDBCarousel showControls showIndicators id="home">
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://mdbootstrap.com/img/new/slides/041.jpg'
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/new/slides/042.jpg'
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/new/slides/043.jpg'
                    alt='...'
                />
            </MDBCarousel>
            <MDBContainer fluid className="bg-dark text-center text-white p-3">
                @copyright by MyApp 2023 || All rights are reserved 
            </MDBContainer>
        </>
    )
}

export default Home;