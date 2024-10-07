import React from 'react';

import NavbarHome from '../components/NavbarHome';
import FormularioAcceso from '../components/FormularioAcceso';
import Footer from '../components/Footer';
import "../css/InicioSesion.css";

function InicioSesion() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='InicioSesion'>
      
      <div className='navbar'>
        <NavbarHome />
      </div>

      {/* Formulario de acceso al centro */}
      <div className='formulario'>
        <FormularioAcceso />
      </div>

      {/* Footer que ocupa el 100% de ancho en la parte inferior */}
      <div className='footer'>
        <Footer />
      </div>
=======
    <div className='loginview'>
=======
    <>
>>>>>>> origin/main
    <NavbarHome/>
    <h1 className='text-center'>Inicio Sesion</h1>
    <div className='loginview ms-5 me-5 mt-5'>
    <FormularioAcceso/>
<<<<<<< HEAD
    <Footer/>
>>>>>>> main
=======
>>>>>>> origin/main
    </div>
    <Footer/>
    </>
    
  );
}

export default InicioSesion;
