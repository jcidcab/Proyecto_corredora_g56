import React from 'react';
import NavbarLogged from '../components/NavbarLogged'
import MenuLateral from '../components/MenuLateral';
import CardList from '../components/CardList';
import Footer from '../components/Footer'

function HomepageLogged() {
  return (
    <>
    <NavbarLogged/>
    <div className='containerSection'>
    <MenuLateral/>
    <CardList/>
    </div>
    <Footer/>
    </>
  );
}

export default HomepageLogged;