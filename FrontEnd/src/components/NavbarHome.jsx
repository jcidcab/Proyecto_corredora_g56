import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css'; 

function NavbarHome() {
    return (
        <Navbar bg="light" expand="lg" className='ps-5'>
            <Navbar.Brand href="#home" className='ms-5'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNci0l4oy4eruJe5fuhETj2UQ_wI2r6P70qg&s" // Reemplaza con la URL o ruta de tu logo
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
                {' SuCasa'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Button variant="outline-primary" className="me-4 rounded-button">Acceder</Button>
                    <Button variant="primary" className='me-5 rounded-button'>Registro</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarHome;
