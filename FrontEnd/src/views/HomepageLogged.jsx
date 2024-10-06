import React from 'react';
import NavbarLogged from '../components/NavbarLogged'
import MenuLateral from '../components/MenuLateral';
import CardList from '../components/CardList';

function HomepageLogged() {
  return (
    <>
    <NavbarLogged/>
    <MenuLateral/>
    <CardList/>
    </>
  );
}

export default HomepageLogged;