// PerfilSection.jsx
import React, { useState } from 'react';
import '../css/PerfilSection.css'

const PerfilSection = ({ nombreUsuario }) => {
  // Estados para almacenar la imagen de perfil y las imágenes de propiedades
  const [imagenPerfil, setImagenPerfil] = useState(null);
  const [propiedades, setPropiedades] = useState([]);

  // Función para manejar la carga de la imagen de perfil
  const manejarCargaImagenPerfil = (e) => {
    setImagenPerfil(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="perfil-section">
      <div className="header-perfil">
        {/* Imagen de perfil */}
        <div className="imagen-perfil">
          <input type="file" accept="image/*" onChange={manejarCargaImagenPerfil} />
          {imagenPerfil && <img src={imagenPerfil} alt="Imagen de perfil" />}
        </div>

        {/* Datos del usuario */}
        <div className="datos-usuario">
          <h2>{nombreUsuario || "Nombre de usuario"}</h2>
        </div>
        
        {/* Imágenes de propiedades */}
        <div className="imagenes-propiedades">
          <h3>Propiedades</h3>
          {propiedades.length > 0 ? (
            propiedades.map((propiedad, index) => (
              <img
                key={index}
                src={URL.createObjectURL(propiedad)}
                alt={`Propiedad ${index + 1}`}
                className="propiedad-imagen"
              />
            ))
          ) : (
            <p>No se han cargado propiedades</p>
          )}
        </div>
      </div>

      {/* Publicaciones del usuario con opciones */}
      <div className="publicaciones">
        <h3>Publicaciones</h3>
        {propiedades.length > 0 ? (
          propiedades.map((propiedad, index) => (
            <div key={index} className="publicacion">
              <img
                src={URL.createObjectURL(propiedad)}
                alt={`Propiedad ${index + 1}`}
                className="publicacion-imagen"
              />
              <div className="opciones">
                <button onClick={() => {/* Lógica para modificar la publicación */}}>Modificar</button>
                <button onClick={() => {
                  // Lógica para eliminar la publicación
                  const nuevasPropiedades = propiedades.filter((_, i) => i !== index);
                  setPropiedades(nuevasPropiedades);
                }}>Eliminar</button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay publicaciones</p>
        )}
      </div>
    </div>
  );
};

export default PerfilSection;
