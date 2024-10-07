import React from 'react';
import DetallePublicacion from '../components/DetallePublicacion';
import NavbarHome from '../components/NavbarHome';
import MenuLateral from '../components/MenuLateral';
import Footer from '../components/Footer';

function VistaDetallePublicacion() {
  return (
    <div>
      <>
      <NavbarHome/>
      <div className='containerSection fullpage'>
      <MenuLateral/>
      <DetallePublicacion/>
      </div>
      <Footer/>

      </>
    </div>
  );
}

export default VistaDetallePublicacion;