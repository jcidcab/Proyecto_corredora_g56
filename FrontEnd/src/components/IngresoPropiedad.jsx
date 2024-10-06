import React, { useState } from 'react';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import '../css/IngresoPropiedad';

const IngresoPropiedad = () => {
  // Estados para los campos del formulario
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [comuna, setComuna] = useState("");
  const [habitaciones, setHabitaciones] = useState("");
  const [baños, setBaños] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenes, setImagenes] = useState([]);

  // Estado para manejar errores
  const [error, setError] = useState(false);

  // Función para manejar el envío del formulario y validación de campos
  const manejarEnvio = (e) => {
    e.preventDefault();

    // Validar que todos los campos obligatorios estén completos
    if (!titulo || !precio || !comuna || !habitaciones || !baños || !descripcion) {
      setError(true);
      return;
    }

    setError(false);

    // Simular guardado de datos
    const propiedad = {
      titulo,
      precio,
      comuna,
      habitaciones,
      baños,
      descripcion,
      imagenes,
    };

    console.log("Propiedad guardada:", propiedad);

    // Limpiar campos después de guardar
    setTitulo("");
    setPrecio("");
    setComuna("");
    setHabitaciones("");
    setBaños("");
    setDescripcion("");
    setImagenes([]);
  };

  // Función para manejar la carga de imágenes
  const manejarCargaImagenes = (e) => {
    const archivos = Array.from(e.target.files);
    setImagenes(archivos);
  };

  return (
    <Form onSubmit={manejarEnvio}>
      {/* Mensaje de error si falta algún campo */}
      {error && <Alert variant="danger">Completa todos los campos requeridos.</Alert>}

      {/* Campo Título */}
      <Form.Group as={Row} className="mb-3" controlId="formTitulo">
        <Form.Label column sm={2}>Título</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Título de la propiedad"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Precio */}
      <Form.Group as={Row} className="mb-3" controlId="formPrecio">
        <Form.Label column sm={2}>Precio</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder="Precio de la propiedad"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Comuna */}
      <Form.Group as={Row} className="mb-3" controlId="formComuna">
        <Form.Label column sm={2}>Comuna</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Comuna de la propiedad"
            value={comuna}
            onChange={(e) => setComuna(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Habitaciones */}
      <Form.Group as={Row} className="mb-3" controlId="formHabitaciones">
        <Form.Label column sm={2}>Habitaciones</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder="Número de habitaciones"
            value={habitaciones}
            onChange={(e) => setHabitaciones(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Baños */}
      <Form.Group as={Row} className="mb-3" controlId="formBaños">
        <Form.Label column sm={2}>Baños</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder="Número de baños"
            value={baños}
            onChange={(e) => setBaños(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Descripción */}
      <Form.Group as={Row} className="mb-3" controlId="formDescripcion">
        <Form.Label column sm={2}>Descripción</Form.Label>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Breve descripción de la propiedad"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo para cargar imágenes */}
      <Form.Group as={Row} className="mb-3" controlId="formImagenes">
        <Form.Label column sm={2}>Imágenes</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="file"
            multiple
            onChange={manejarCargaImagenes}
          />
        </Col>
      </Form.Group>

      {/* Botón para guardar */}
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Guardar</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default IngresoPropiedad;
