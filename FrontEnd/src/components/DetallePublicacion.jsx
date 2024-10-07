import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HouseDoorFill, BadgeWc } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetallePublicacion = () => {
  // Array de URLs de imágenes; asegúrate de que sean únicas
  const images = [
    "https://via.placeholder.com/800x400?text=Imagen+1", // Imagen 1
    "https://via.placeholder.com/800x400?text=Imagen+2", // Imagen 2
    "https://via.placeholder.com/800x400?text=Imagen+3"  // Imagen 3
  ];
  
  // Estado inicial para la imagen grande, comenzando con la primera imagen
  const [imagenGrande, setImagenGrande] = useState(images[0]);

  // Handler para cambiar la imagen grande al hacer clic en una miniatura
  const handleImageClick = (url) => {
    setImagenGrande(url);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          {/* Imagen principal que cambia al hacer clic en las miniaturas */}
          <img
            src={imagenGrande}
            className="img-fluid mb-3"
            alt="Publicación Principal"
          />

          {/* Conjunto de miniaturas */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Imagen ${index + 1}`}
                className="img-fluid"
                style={{ width: '32%', cursor: 'pointer' }}
                onClick={() => handleImageClick(url)} // Cambia la imagen grande
              />
            ))}
          </div>
        </Col>
        <Col md={4}>
          {/* Detalles adicionales de la publicación */}
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
