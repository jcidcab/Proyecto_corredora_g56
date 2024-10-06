import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
return (
<footer className="bg-dark text-white text-center py-3">
    <Container>
    <p className="mb-0">Mi App &copy; Marca Registrada</p>
    <p style={{fontSize: '12px'}}>Juan Cid, Nicolás Perez y Pablo Araya</p>
    </Container>
</footer>
);
};

export default Footer;

//Texto agregado