import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bell } from 'react-bootstrap-icons';

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg" className='ps-5'>
            <Navbar.Brand href="#home" className='ms-5'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNci0l4oy4eruJe5fuhETj2UQ_wI2r6P70qg&s" // Reemplaza con la URL o ruta de tu logo
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
                {' MiAplicación'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex align-items-center">
                    <Button variant="link" className="me-4">
                        <Bell size={30} style={{ color: '#6c757d' }} />
                    </Button>
                    <Button variant="outline-secondary"  className="p-0 border-0 bg-transparent">
                    <img
                        src="https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=" // Reemplaza con la URL o ruta de tu imagen de perfil
                        width="50"
                        height="50"
                        className="rounded-circle me-5"
                        alt="Profile"
                    />
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;