import React from 'react';
import NavbarHome from '../components/NavbarHome';
import FormularioRegistro from '../components/FormularioRegistro';
import Footer from '../components/Footer';
import MenuLateral from '../components/MenuLateral'

function RegistroUsuarios() {
  return (
    <>
    <NavbarHome/>
    <FormularioRegistro/>
    <Footer/>
    </>
  );
}

export default RegistroUsuarios;