import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import sendEmail from '../services/EmailJs';
import './Contacts.css';


function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const popover = (
    <Popover className="my-custom-popover">
      <Popover.Header as="h3">&lt; Enviado! &gt;</Popover.Header>
      <Popover.Body>
        Muito Obrigado por entrar em contato, em breve eu irei responder.
      </Popover.Body>
    </Popover>
  );


  const formValidation = async () => {
    if (name === '' || email === '' || message === '') {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setName('')
      setEmail('')
      setMessage('')
      sendEmail({ name, email, message })
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await formValidation();
  };

  return (
    <Container fluid className='container-contacts bg-light'>
      <h1>&lt; Contatos &gt;</h1>
      {showAlert && (
        <Alert variant='danger'>Por favor, preencha todos os campos.</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Seu nome:</Form.Label>
          <Form.Control
            type='input'
            placeholder='Caio Galvão'
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Endereço de E-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder='caio@galvao.com'
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
          <Form.Text className='text-muted'>
            Não irei compartilhar esse e-mail com ninguem.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formMenssage'>
          <Form.Label>Deixe sua mensagem aqui:</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            value={message}
            onChange={event => {
              setMessage(event.target.value);
            }}
          />
        </Form.Group>
        <OverlayTrigger show={showSuccess} placement="top" overlay={popover}>
          <Button className='mb-3' variant='dark' type='submit'>
            Enviar
          </Button>
        </OverlayTrigger>
      </Form>
    </Container >
  );
}

export default Contacts;
