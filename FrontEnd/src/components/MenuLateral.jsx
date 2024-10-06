import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMessage, faSliders } from '@fortawesome/free-solid-svg-icons';
import '../css/MenuLateral.css'


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
    </div>
  );
};

export default MenuLateral;
