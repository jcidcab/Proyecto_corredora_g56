import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HouseDoorFill, BadgeWc } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetallePublicacion = () => {
  // Array de URLs de imágenes diferentes
  const images = [
    "https://via.placeholder.com/800x400?text=Imagen+1", // Reemplaza con tu URL de imagen
    "https://via.placeholder.com/800x400?text=Imagen+2", // Otra imagen
    "https://via.placeholder.com/800x400?text=Imagen+3"  // Y otra más
  ];
  
  // Estado para la imagen principal
  const [imagenGrande, setImagenGrande] = useState(images[0]);

  // Cambiar imagen principal
  const handleImageClick = (url) => {
    setImagenGrande(url);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          {/* Imagen principal */}
          <img
            src={imagenGrande}
            className="img-fluid mb-3"
            alt="Publicación Principal"
          />

          {/* Miniaturas */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Imagen ${index + 1}`}
                className="img-fluid cursor-pointer"
                style={{ width: '32%', cursor: 'pointer' }}
                onClick={() => handleImageClick(url)}
              />
            ))}
          </div>
        </Col>
        <Col md={4}>
          {/* Detalles */}
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
