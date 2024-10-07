import React from 'react';
import NavbarHome from '../components/NavbarHome';
import FormularioRegistro from '../components/FormularioRegistro';
import Footer from '../components/Footer';
import MenuLateral from '../components/MenuLateral'

function RegistroUsuarios() {
  return (
    <>
    <div className='registroview'>
    <NavbarHome/>
    <h1>Registro de usuario</h1>
    <FormularioRegistro/>
    <Footer/>
    </div>
    </>
  );
}

export default RegistroUsuarios;