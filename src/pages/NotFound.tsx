import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import IErrorObject from '../Interfaces/IErrorObject';
import './NotFound.css';

export default function ErrorPage() {
  const error: IErrorObject = useRouteError() as IErrorObject;
  console.error('Erro: ', error);

  return (
    <Container fluid id="error-page" className='container-nfound bg-light'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
        <Button variant='dark'>Vamos para Home!</Button>
      </Link>
    </Container>
  );
}
