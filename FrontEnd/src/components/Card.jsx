import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyCard = ({ title, location, price }) => {
return (
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg" />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>Ubicación: {location}</Card.Text>
    <Card.Text>Precio: ${price}</Card.Text>
    <Link to="/detalle-publicacion">
    <Button variant="primary">Ver más</Button>
    </Link>
    </Card.Body>
</Card>
);
};

export default MyCard;