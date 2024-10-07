import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavbarHome() {
  return (
    <div className='navbarflex'>
      <Navbar bg="light" expand="lg" className='navbar-custom'>
        <Navbar.Brand href="#home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNci0l4oy4eruJe5fuhETj2UQ_wI2r6P70qg&s"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' SuCasa'}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto empuja el contenido hacia la derecha */}
            <Link to="/inicio-sesion">
              <Button variant="outline-primary" className="me-4 rounded-button">Acceder</Button>
            </Link>
            <Link to="/registro">
              <Button variant="primary" className="me-5 rounded-button">Registro</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHome;
