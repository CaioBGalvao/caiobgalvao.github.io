import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './NotFound.css';

function NotFound() {
	return (
		<Container fluid className='container-nfound bg-light'>
			<h1>404 - Not Found</h1>
			<p>Não há nada aqui.</p>
			<Link to='/'>
				<Button variant='dark'>Vamos para a home?</Button>
			</Link>
		</Container>
	);
}

export default NotFound;
