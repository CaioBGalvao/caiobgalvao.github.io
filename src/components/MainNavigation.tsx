import './MainNavigation.css';

import { Link, NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

// https://uiverse.io/alexmaracinaru/empty-moose-12

function MainNavigation() {
  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
      <Navbar.Brand className='brand'>&lt; Caio Galvão &gt;</Navbar.Brand>
      <Navbar.Toggle className='togle-button' aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='justify-content-center'>
          <NavLink to='/' className='nav-button nav-link'>
            <span className='hover-underline-animation'> Home </span>
          </NavLink>
          <NavLink to='/aboutMe' className='nav-button nav-link'>
            <span className='hover-underline-animation'> Sobre Mim </span>
          </NavLink>
          <NavLink to='/contact' className='nav-button nav-link'>
            <span className='hover-underline-animation'> Contatos </span>
          </NavLink>
          <NavLink to='projects' className='nav-button nav-link'>
            <span className='hover-underline-animation'> Projetos </span>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavigation;
