import React, { Fragment,useState} from 'react';
import PostertopApp from '../Postertop';
import { MDBContainer, MDBRow , MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import FooterApp from '../Footer';
import { Button } from 'bootstrap';
import LayoutApp from '../Layout';

function BookingTableApp() {
    const [visible, setVisible] = useState(false)
        
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <Fragment>
        <LayoutApp/>
            <PostertopApp name="Book Table"/>
            <MDBContainer id='booktable' className='mb-4'>
            <MDBCol className='position-relative'>
                <h4 className='mt-5 text-danger' id='oneline'>Reservation</h4>
            </MDBCol>
                <h1 className='mt-3'>Book Table</h1>
                <form >
                <MDBRow className='mt-4'>
                    <MDBCol  sm={12} md={4} lg={4} className='mx-auto'>
                        <input
                            type="text"
                            name="username"
                            maxLength="10"  
                            placeholder="Username"
                            pattern="[A-Za-z]" 
                            required
                            className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-0'>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            title='Enter valid email address'
                            required
                            className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-0'>
                        <input
                            type="subject"
                            name="subject"
                            placeholder="subject"
                            pattern="[A-Za-z]"
                            required
                            className='rounded-0 p-2 w-100'/>
                    </MDBCol>
                    <MDBCol xs={10} sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-4'>
                        <input 
                            type='date' 
                            name='date' 
                            placeholder='Date' 
                            required
                            className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-4'>
                        <input 
                            type='time' 
                            name='time' 
                            placeholder='Time' 
                            required 
                            className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={12} md={4} lg={4} className='mx-auto mt-3 mt-md-4'>
                        <input 
                            type='number' 
                            name='number' 
                            placeholder='Number of People' 
                            required 
                            className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={12} md={12} lg={12} className='mx-auto mt-3 mt-md-4'>
                        <textarea rows={6} 
                            placeholder='Message' 
                            name='name'  
                            className='p-2 w-100' />
                    </MDBCol>
                    <MDBCol size={12} className=' mt-3 mt-md-4' align="center">
                        <MDBBtn type='submit' className=' bg-danger rounded-pill border border-0'>Book Table</MDBBtn>
                    </MDBCol>
                </MDBRow>
                </form>
            </MDBContainer>


            {/* footer start */}
            <FooterApp />

            {/* scroll top arrow */}
            <button href="#" onClick={scrollToTop} className="scroll-top bg-danger" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>
        </Fragment>
    )
}

export default BookingTableApp;
