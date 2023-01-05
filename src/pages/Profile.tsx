import './Profile.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import React from 'react';
import github from '../assets/svg/github.svg';
import linkedin from '../assets/svg/linkedin.svg';
import profilePicture from '../assets/jpeg/perfil.jpg';

function Profile() {
  return (
    <>
      <Helmet>
        <title>Home - Portifólio</title>
        <meta name='description' content='Página principal com a apresentação do Site.' />
      </Helmet>
      <Container fluid className='container-profile'>
        <Image src={profilePicture} alt='Foto de perfil' className='rounded-circle profile-picture' />
        <h1 className='mt-2 mb-1'>&lt; Caio Galvão &gt;</h1>
        <h2 className='mt-2 mb-1'>Web Developer Full Stack (ele/dele)</h2>
        <div className='mt-5'>
          <ButtonGroup>
            <Button variant="dark">
              <Link to="/aboutMe" className="text-decoration-none text-reset">Sobre Mim</Link>
            </Button>
            <Button variant="dark">
              <Link to="/contact" className="text-decoration-none text-reset">Entre em contato</Link>
            </Button>
            <Button variant="dark">
              <Link to="/projects" className="text-decoration-none text-reset">Meu Portifólio</Link>
            </Button>
          </ButtonGroup>
          <div className='d-flex justify-content-evenly mt-5'>
            <a className='mx-2' href='https://www.linkedin.com/in/caiobgalvao' target='_blank' rel='noreferrer'>
              <img className='sm' src={linkedin} alt='LinkedIn icon' />
            </a>
            <a href='https://github.com/CaioBGalvao' target='_blank' rel='noreferrer'>
              <img className='sm' src={github} alt='LinkedIn icon' />
            </a>
          </div>
        </div>
      </Container >
    </>
  );
}

export default Profile;
