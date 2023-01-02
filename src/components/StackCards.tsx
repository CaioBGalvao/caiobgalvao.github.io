import './StackCards.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import IStacksCard from '../Interfaces/IStacksCard';
import React from 'react';
import linkImg from '../assets/svg/link.svg'

function StackCards({ src, title, text, link }: IStacksCard) {

  return (
    <Col className='column mb-2 mt-2 mr-2 ml-2'>
      <Card className='cards'>
        <Card.Img variant="top" src={src} className='mx-auto' />
        <Card.Body className='mt-1 mb-1'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <a href={link} target='_blank' rel='noreferrer'>
            <img src={linkImg} alt="Link to the library's official website" />
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StackCards;