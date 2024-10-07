import React from 'react';
import NavbarLogged from '../components/NavbarLogged';
import Footer from '../components/Footer';
import  CardList  from '../components/CardList';

function Propiedades() {
  return (
    <>
    <NavbarLogged/>
    <div className='IngresoPropiedadSection ms-5 me-5 mt-5'>
    <CardList/>
    </div>
    <Footer/>
    </>
  );
}

export default Propiedades;