import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
        <Navbar.Brand href="/">Lion's Gym</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

        
        </Nav>
        <Nav>
        
        <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Personal Training </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Diet Plan</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Weight Loss</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Cardio</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link href="#deets">About Us</Nav.Link>
      <Nav.Link href="#features">Gallery</Nav.Link>
      <Nav.Link eventKey={2} href="/login">
         Admin-Login
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
        </div>
    )
}

export default Header;
