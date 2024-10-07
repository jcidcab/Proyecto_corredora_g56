import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HouseDoorFill, BadgeWc } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetallePublicacion = () => {
  // URL de las imágenes
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mPm-kxBKYX0-3pgrsnM_WvtJ5yGntMFfiA&s", // Imagen 1
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mPm-kxBKYX0-3pgrsnM_WvtJ5yGntMFfiA&s", // Imagen 2 (mismo enlace actualmente; cambia según necesites)
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mPm-kxBKYX0-3pgrsnM_WvtJ5yGntMFfiA&s"  // Imagen 3 (mismo enlace actualmente; cambia según necesites)
  ];
  
  // Estado para controlar qué imagen grande se muestra, inicializada con la primera imagen
  const [imagenGrande, setImagenGrande] = useState(images[0]);

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
            {images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Imagen ${index + 1}`}
                className="img-fluid cursor-pointer"
                style={{ width: '32%' }}
                onClick={() => handleImageClick(url)}
              />
            ))}
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

