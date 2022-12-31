import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import IStacksCard from '../Interfaces/IStacksCard';
import React from 'react';

function StackCards({ src, title, text, link }: IStacksCard) {

  return (
    <Col className='justify-content-evenly mt-2 mb-2'>
      <Card style={{ width: '10vw', height: '37vh' }}>
        <Card.Img variant="top" src={src} style={{ width: '9vw', height: '25vh' }} className='mx-auto' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <a href={link} target='_blank' rel='noreferrer'></a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StackCards;