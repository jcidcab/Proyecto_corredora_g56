import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMessage, faSliders, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/MenuLateral.css';
import { Link } from 'react-router-dom';


const MenuLateral = () => {
  return (
    <div className="menu-lateral">
     
      <div className="menu-item">
        <FontAwesomeIcon icon={faHouse} />
        <span>Propiedades</span>
      </div>
      <hr />
      <div className="menu-item">
        <FontAwesomeIcon icon={faMessage} />
        <span>Mensajería</span>
      </div>
      <div className="menu-item">
        <FontAwesomeIcon icon={faSliders} />
        <span>Configuración</span>
      </div>
      <hr />
      <div className='menu-item'>
        <Link to="/mi-perfil" className="menu-item">
        <FontAwesomeIcon icon={faUser} /> 
        <span>Mi Perfil</span>
        </Link>
        </div>
    </div>
  );
};

export default MenuLateral;
