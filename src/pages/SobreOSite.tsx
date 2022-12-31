import './SobreOSite.css';

import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import React from 'react';
import Row from 'react-bootstrap/Row';
import StackCard from '../components/StackCards';
import techs from '../json/stack';

function SobreOSite() {
  return (
    <>
      <Helmet>
        <title>Tech Stack - Portifólio</title>
        <meta name='description' content='Página de informações das libs usadas no site.' />
      </Helmet>
      <Container fluid className='container-geral'>
        <div>
          <h1>&lt; Sobre o site &gt;</h1>
          <h2>Esse site foi contruido com:</h2>
        </div>
        <Row className='row-cards mt-3 mb-3'>
          {
            techs.map((stack, index) => (
              <StackCard
                key={index + 1}
                src={stack.src}
                title={stack.title}
                text={stack.text}
                link={stack.src}
              />
            ))
          }
        </Row>
      </Container>
    </>
  );
};

export default SobreOSite;