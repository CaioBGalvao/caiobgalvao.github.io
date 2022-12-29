import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './MainNavigation.css';

// https://uiverse.io/alexmaracinaru/empty-moose-12

function MainNavigation() {
  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
      <Navbar.Brand className='brand'>&lt; Caio Galvão &gt;</Navbar.Brand>
      <Navbar.Toggle className='togle-button' aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='justify-content-center'>
          <Nav.Link>
            <Link to='/' className='nav-button'>
              <span className='hover-underline-animation'> Home </span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/aboutMe' className='nav-button'>
              <span className='hover-underline-animation'> Sobre Mim </span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/contact' className='nav-button'>
              <span className='hover-underline-animation'> Contatos </span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='projects' className='nav-button'>
              <span className='hover-underline-animation'> Projetos </span>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavigation;
