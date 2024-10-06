import React from 'react';
import NavbarHome from '../components/NavbarHome'
import FormularioAcceso from '../components/FormularioAcceso';
import Footer from '../components/Footer';


function InicioSesion() {
  return (
    <div className='loginview'>
    <NavbarHome/>
    <FormularioAcceso/>
    <Footer/>
    </div>
  );
}

export default InicioSesion;