import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';

function Profile() {
  return (
    <Container>
      <Image className="mx-auto" srcset="https://www.gravatar.com/avatar/9e14865b2f61fdfdce1f208535b96700" alt="Foto de perfil" />
      <h1>&lt; Caio Galvão /&gt;</h1>
      <h2>Web Developer Full Stack</h2>
      <Button variant="dark">Contact Me</Button>

    </Container>
  );
}

export default Profile;
