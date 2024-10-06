import React, { useState } from 'react';
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import '../css/FormularioAcceso';

const FormularioAcceso = () => {
  // Estados para los campos del formulario
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  // Estado para manejar errores de validación
  const [error, setError] = useState(false);

  // Contraseña correcta para validación (puedes reemplazarla con tu lógica de autenticación)
  const contraseñaCorrecta = "123456"; // Ejemplo, cambiar por la contraseña real que se quiera validar

  // Función para manejar el envío del formulario y validar la contraseña
  const validarAcceso = (e) => {
    e.preventDefault();

    // Validar si la contraseña es incorrecta
    if (password !== contraseñaCorrecta) {
      setError(true);
      return;
    }

    // Si la contraseña es correcta, ocultar mensaje de error
    setError(false);

    // Aquí puedes agregar la lógica para redirigir al usuario o realizar alguna acción
    console.log("Inicio de sesión exitoso");
    console.log({ usuario, password });

    // Limpiar campos después de iniciar sesión
    setUsuario("");
    setPassword("");
  };

  return (
    <Form onSubmit={validarAcceso}>
      {/* Mensaje de error si la contraseña es incorrecta */}
      {error && <Alert variant="danger">La contraseña es incorrecta</Alert>}

      {/* Campo Email o Nombre de usuario */}
      <Form.Group as={Row} className="mb-3" controlId="formUsuario">
        <Form.Label column sm={3}>
          Email o Nombre de usuario
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Ingresa tu email o nombre de usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Campo Contraseña */}
      <Form.Group as={Row} className="mb-3" controlId="formPassword">
        <Form.Label column sm={3}>
          Contraseña
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Form.Group>

      {/* Botón Iniciar sesión */}
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 9, offset: 3 }}>
          <Button type="submit">Iniciar sesión</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default FormularioAcceso;
