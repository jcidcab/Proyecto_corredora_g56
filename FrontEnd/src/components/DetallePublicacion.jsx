import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HouseDoorFill, BadgeWc } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetallePublicacion = () => {
  // Estado para controlar qué imagen grande se muestra
  const [imagenGrande, setImagenGrande] = useState("https://images.adsttc.com/media/images/5ea2/119e/b357/6561/5800/002f/medium_jpg/3._E_PHX6029.jpg?1587679598"); // Imagen inicial

  // Handler para hacer clic en imágenes del selector
  const handleImageClick = (url) => {
    setImagenGrande(url);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          {/* Imagen grande de la publicación */}
          <img
            src={imagenGrande} // Imagen seleccionada
            className="img-fluid mb-3"
            alt="Publicación Principal"
          />

          {/* Selector de imágenes */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
              src="https://es.habcdn.com/photos/project/medium/bano-con-revestimientos-porcelanicos-y-mueble-lavabo-suspendido-2265906.jpg" // Reemplaza con la URL de tu imagen pequeña
              alt="Imagen 1"
              className="img-fluid cursor-pointer"
              style={{ width: '32%' }}
              onClick={() => handleImageClick("imagen_pequena_1_url")}
            />
            <img
              src="https://content.arquitecturaydiseno.es/medio/2021/02/17/dormitorio-con-balcon-de-madera_98a9bfcc_1200x630.jpg" // Reemplaza con la URL de tu imagen pequeña
              alt="Imagen 2"
              className="img-fluid cursor-pointer"
              style={{ width: '32%' }}
              onClick={() => handleImageClick("imagen_pequena_2_url")}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNfnj0uQMX2pT0OvxfOakhyAGhY7qkNJMMQ&s" // Reemplaza con la URL de tu imagen pequeña
              alt="Imagen 3"
              className="img-fluid cursor-pointer"
              style={{ width: '32%' }}
              onClick={() => handleImageClick("imagen_pequena_3_url")}
            />
          </div>
        </Col>
        <Col md={4}>
          {/* Detalles de la publicación */}
          <h2>Título de la Propiedad</h2>
          <p><strong>Precio:</strong> $200,000</p>
          <p><strong>Comuna:</strong> Santiago</p>
          <p><HouseDoorFill /> 3 Habitaciones</p>
          <p><BadgeWc /> 2 Baños</p>
          <p><strong>Descripción:</strong> Una hermosa propiedad ubicada en el corazón de la ciudad...</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetallePublicacion;
