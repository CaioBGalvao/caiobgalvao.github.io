import React from 'react';
import Container from 'react-bootstrap/Container';
import './AboutMe.css';

function AboutMe() {
	return (
		<Container fluid className='container-about bg-light'>
			<h1>&lt; About Me &gt;</h1>
			<p>Um texto para ocupar aqui</p>
		</Container >
	);
}

export default AboutMe;
