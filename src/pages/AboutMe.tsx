import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './AboutMe.css';
import SobreMim from '../components/SobreMim';

function AboutMe() {
  return (
    <Container fluid className='container-about bg-light'>
      <h1 className='mt-5'>&lt; Sobre Mim &gt;</h1>
      <SobreMim />
      <Link to='/contact' className='mb-5'>
        <Button variant='dark'>Me envie um E-mail</Button>
      </Link>
    </Container >
  );
}

export default AboutMe;
