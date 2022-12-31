import './AboutMe.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import React from 'react';
import SobreMim from '../components/SobreMim';

function AboutMe() {
  return (
    <>
      <Helmet>
        <title>Sobre Mim - Portifólio</title>
        <meta name='description' content='Página com informações sobre mim.' />
      </Helmet>
      <Container fluid className='container-about bg-light'>
        <h1 className='mt-5'>&lt; Sobre Mim &gt;</h1>
        <SobreMim />
        <Link to='/contact' className='mb-5'>
          <Button variant='dark'>Me envie um E-mail</Button>
        </Link>
      </Container >
    </>
  );
}

export default AboutMe;
