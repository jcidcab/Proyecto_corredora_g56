import React from 'react';
import PerfilSection from '../components/PerfilSection';
import Footer from '../components/Footer';
import NavbarLogged from '../components/NavbarLogged';

function MiPerfil() {
  return (
    <>
      <NavbarLogged/>
      <div className='containerSectionPerfil'>
      <PerfilSection/>
      </div>
      <Footer/>
    </>
  );
}

export default MiPerfil;