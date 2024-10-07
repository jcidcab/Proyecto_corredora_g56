import React from 'react';

import NavbarHome from '../components/NavbarHome';
import FormularioAcceso from '../components/FormularioAcceso';
import Footer from '../components/Footer';
import "../css/InicioSesion.css";

function InicioSesion() {
  return (
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
    <NavbarHome/>
    <h1>Inicio Sesion</h1>
    <FormularioAcceso/>
    <Footer/>
>>>>>>> main
    </div>
  );
}

export default InicioSesion;
