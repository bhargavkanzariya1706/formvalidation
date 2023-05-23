import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {   NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      
      <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">User Registration</Navbar.Brand>
          <Nav className="me-auto"> 
      <Nav.Link href="#">
      <NavLink to="/">Home</NavLink>
      </Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
     </Nav> 
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
