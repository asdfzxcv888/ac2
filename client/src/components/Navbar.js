// Navbar.js

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../globalcontext/useGlobalContext';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #232f3e;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavLink = styled.li`
  margin-right: 20px;
`;

const Button=styled.button`
font-weight:Normal;
`
const Navbar = () => {
    const navigate=useNavigate()
    const{user,setuser,setcolo}=useGlobalContext()
  return (
    <Container>
      <Logo>Amazon Clone</Logo>
      <NavLinks>
        <NavLink><Button onClick={()=>{navigate('/')}}>Home</Button></NavLink>
        <NavLink><Button onClick={()=>{navigate('/products')}}>Products</Button></NavLink>
        <NavLink><Button onClick={()=>{navigate('/cart')}}>Cart</Button></NavLink>
        <NavLink><Button onClick={()=>{navigate('/account')}}>Account</Button></NavLink>
        {!user?(<NavLink><Button onClick={()=>{navigate('/Login')}}>Login</Button></NavLink>):<NavLink><Button onClick={()=>{
          navigate('/Login')
          
          setuser(null)
          setcolo(false)
        }}>Logout</Button></NavLink>}
      </NavLinks>
    </Container>
  );
};

export default Navbar;
