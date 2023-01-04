import '../components/StackCards.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import IStacksCard from '../Interfaces/IStacksCard';
import React from 'react';
import linkImg from '../assets/svg/link.svg'

function StackCards({ src, title, text, link }: IStacksCard) {

  return (
    <Col className='mb-2 mt-2'>
      <Card className='cards'>
        <Card.Img variant="top" src={src} className='mx-auto mt-2 card-img' />
        <Card.Body className='mt-1 mb-1'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <a href={link} target='_blank' rel='noreferrer'>
            <img src={linkImg} alt={`Link para o site oficial da biblioteca ${title}`} />
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StackCards;