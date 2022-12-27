import React from 'react';
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
					<Nav.Link href='/' className='nav-button'>
						<span className='hover-underline-animation'> Home </span>
					</Nav.Link>
					<Nav.Link href='/AboutMe' className='nav-button'>
						<span className='hover-underline-animation'> Sobre Mim </span>
					</Nav.Link>
					<Nav.Link href='/Contact' className='nav-button'>
						<span className='hover-underline-animation'> Contato </span>
					</Nav.Link>
					<Nav.Link href='/Projects' className='nav-button'>
						<span className='hover-underline-animation'> Projetos </span>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default MainNavigation;
