import React from 'react';
import NavbarHome from '../components/NavbarHome';
import FormularioRegistro from '../components/FormularioRegistro';
import Footer from '../components/Footer';

function RegistroUsuarios() {
  return (
    <>
    <NavbarHome/>
    <h1 className='text-center'>Registro de usuario</h1>
    <div className='registroview me-5 ms-5 mt-5'>
    <FormularioRegistro/>
    </div>
    <Footer/>
    </>
  );
}

export default RegistroUsuarios;