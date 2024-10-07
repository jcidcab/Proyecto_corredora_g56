import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import '../css/FormularioRegistro.css';

const FormularioRegistro = () => {
  // Estados para cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  // Estado para gestionar errores
  const [error, setError] = useState(false);

  // Función de validación y manejo de envío del formulario
  const validarInput = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (nombre === "" || email === "" || telefono === "" || password === "") {
      setError(true);
      return;
    }

    // Si todos los campos están completos, se oculta el mensaje de error
    setError(false);
    
    //agregar la lógica para enviar los datos a tu backend o realizar alguna acción
    console.log("Formulario enviado con éxito");
    console.log({ nombre, email, telefono, password });

    // Limpiar campos después de enviar el formulario
    setNombre("");
    setEmail("");
    setTelefono("");
    setPassword("");
  };

  return (
    <Form onSubmit={validarInput}>
      {/* Mostrar mensaje de error si falta algún campo */}
      {error ? <Alert variant='danger'>Completa todos los datos</Alert> : null}

      {/* Campo Nombre */}
      <Form.Group as={Row} className="mb-3" controlId="formNombre">
        <Form.Label column sm={2}>
          Nombre
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            value={nombre}
            placeholder="Ingresa tu nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Email */}
      <Form.Group as={Row} className="mb-3" controlId="formEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            value={email}
            placeholder="Ingresa tu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Teléfono */}
      <Form.Group as={Row} className="mb-3" controlId="formTelefono">
        <Form.Label column sm={2}>
          Teléfono
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="tel"
            value={telefono}
            placeholder="Ingresa tu teléfono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Contraseña */}
      <Form.Group as={Row} className="mb-3" controlId="formPassword">
        <Form.Label column sm={2}>
          Contraseña
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="password"
            value={password}
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Botón de Enviar */}
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Registrarme</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default FormularioRegistro;
