import React from 'react';
import Container from 'react-bootstrap/Container';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';

function Home() {
  return (
    <Container>
      <Profile />
      <AboutMe />
    </Container>
  );
}

export default Home;
