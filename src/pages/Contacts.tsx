import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';
import './Contacts.css';


function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [envError, setEnvError] = useState(false);

  const templateParams = {
    fromName: name,
    fromEmail: email,
    toName: 'Caio Galvão',
    message,
  };

  const serviceId = import.meta.env.VITE_APP_SERVICE_ID
  const templateId = import.meta.env.VITE_APP_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY

  const sendEmail = async () => {
    if (name === '' || email === '' || message === '') {
      setShowAlert(true);
    } else {
      try {
        await emailjs
          .send(
            serviceId,
            templateId,
            templateParams,
            publicKey);
      } catch (error) {
        console.error(error);
        setEnvError(true);
      }
        setShowAlert(false);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await sendEmail();
    };

    return (
      <Container fluid className='container-contacts bg-light'>
        {envError && (
          <Alert variant='danger'>Por favor, preencha todos os campos.</Alert>
        )}
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

          <Button className='mb-3' variant='primary' type='submit'>
            Enviar
          </Button>

          {showSuccess && (
            <Alert variant='success'>E-mail enviado.</Alert>
          )}
        </Form>
      </Container >
    );
  }

  export default Contacts;
