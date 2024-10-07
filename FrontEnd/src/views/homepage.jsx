import React from 'react';
import NavbarHome from '../components/NavbarHome'
import MenuLateral from '../components/MenuLateral';
import CardList from '../components/CardList';
import Footer from '../components/Footer'

function Homepage() {
  return (
    <>
    <NavbarHome/>
    <div className='containerSection'>
    <MenuLateral/>
    <CardList/>
    </div>
    <Footer/>
    </>
  );
}

export default Homepage;