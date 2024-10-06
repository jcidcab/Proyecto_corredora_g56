import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyCard from './Card';
const cardData = [
{ title: 'Titulo 1', location: 'Ubicación 1', price: 0 },
{ title: 'Titulo 2', location: 'Ubicación 2', price: 0 },
{ title: 'Titulo 3', location: 'Ubicación 3', price: 0 },
{ title: 'Titulo 4', location: 'Ubicación 4', price: 0 },
{ title: 'Titulo 5', location: 'Ubicación 5', price: 0 },
{ title: 'Titulo 6', location: 'Ubicación 6', price: 0 }
];

const CardList = () => {
return (
<Container className='containerCardList'>
    <h2 className='publicaciones'>Mis publicaciones</h2>
    <div className='listadoTarjetas'> 
    <Row>
    {cardData.map((card, index) => (
        <Col key={index} xs={12} md={4} lg={4} className="mb-4 d-flex justify-content-center">
        <MyCard title={card.title} location={card.location} price={card.price} />
        </Col>
    ))}
    </Row>
    </div>

</Container>
);
};

export default CardList;
