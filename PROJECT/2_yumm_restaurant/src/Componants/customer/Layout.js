import React, { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function LayoutApp() {

  const [showBasic, setShowBasic] = useState(false);

  // colorchange navbar on scroll
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  
  return (
    <Fragment>
      <MDBNavbar expand='lg' id='navigation' className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <MDBContainer>
          <MDBNavbarBrand className='brand-logo'> <Link to="/Home"><h1>2<sub>Yumm</sub></h1></Link></MDBNavbarBrand>

          <MDBNavbarToggler className='border border-0'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon className='m-0 p-0'>
              <i className='fa fa-th-large text-danger m-0 p-0'></i>
            </MDBIcon>
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='w-auto ms-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to="/home">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to="/about">About Us</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Service
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      <Link to="/bookingtable"> Booking </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Link to="/menu"> Menu</Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to="/Contactus">Contact Us</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem >
                <Link to="/Bookingtable">
                  <MDBBtn className='btn-outline-danger bg-dark bookingbtn'>
                    Book Table
                  </MDBBtn>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse> 
        </MDBContainer>
      </MDBNavbar>
      <Outlet />
    </Fragment>
  );
}