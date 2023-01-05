import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import IProjectCard from '../Interfaces/IProjectCard';
import React from 'react';
import github from '../assets/svg/github.svg'

function StackCards({title, text, link }: IProjectCard) {

  return (
    <Col className='mb-2 mt-2'>
      <Card className='cards'>
        <Card.Body className='mt-1 mb-1'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <a href={link} target='_blank' rel='noreferrer'>
            <img src={github} alt={`Link para o repositório do projeto ${title}`} />
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StackCards;