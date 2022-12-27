import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Profile.css';

import linkedin from '../assets/svg/linkedin.svg';
import github from '../assets/svg/github.svg';

function Profile() {
	return (
		<Container fluid className='container-profile'>
			<Image srcSet='https://www.gravatar.com/avatar/9e14865b2f61fdfdce1f208535b96700' alt='Foto de perfil' className='rounded-circle profile-picture' />
			<h1 className='mt-2 mb-1'>&lt; Caio Galvão &gt;</h1>
			<h2 className='mt-2 mb-1'>Web Developer Full Stack (ele/dele)</h2>
			<div className='mt-5'>
				<Link to='/AboutMe'>
					<Button variant='dark'>Sobre Mim</Button>
				</Link>
				<div className='d-flex justify-content-evenly mt-5'>
					<a className='mx-2' href='https://www.linkedin.com/in/caio-galvao/' target='_blank' rel='noreferrer'>
						<img className='sm' src={linkedin} alt='LinkedIn icon' />
					</a>
					<a href='https://github.com/CaioBGalvao' target='_blank' rel='noreferrer'>
						<img className='sm' src={github} alt='LinkedIn icon' />
					</a>
				</div>
			</div>
		</Container >
	);
}

export default Profile;
