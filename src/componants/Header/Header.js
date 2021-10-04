import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div>
              <NavLink to="/home" ><img className='img' src={logo} alt="" /></NavLink>
            </div>
        <div >

       
<Navbar style={{ height : '60px' }}  bg="secondary" variant="dark">
  <Container>
  
    <Nav className="mx-auto my-5 ">
      <NavLink className='text-white text ' to="/home">Home</NavLink>
      <NavLink className='text-white text ' to="/about">About</NavLink>
      <NavLink  className='text-white  text' to="/services">Services</NavLink>
      <NavLink  className=' text-white text' to="/login"> Login</NavLink>
     
     
    </Nav>
    

  </Container>
</Navbar>

        </div>

        </div>
        
    );
};

export default Header;