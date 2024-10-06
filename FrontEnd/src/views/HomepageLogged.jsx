import React from 'react';
import NavbarLogged from '../components/NavbarLogged'
import MenuLateral from '../components/MenuLateral';
import CardList from '../components/CardList';
import Footer from '../components/Footer'

function HomepageLogged() {
  return (
    <>
    <NavbarLogged/>
    <MenuLateral/>
    <CardList/>
    <Footer/>
    </>
  );
}

export default HomepageLogged;