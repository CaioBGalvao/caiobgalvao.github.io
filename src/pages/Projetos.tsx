import './SobreOSite.css';

import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import ProjectCard from '../components/ProjectCards';
import React from 'react';
import Row from 'react-bootstrap/Row';
import projects from '../json/projects';

function Projetos() {
  return (
    <>
      <Helmet>
        <title>Projetos - Portifólio</title>
        <meta name='description' content='Página com todos os meus projetos.' />
      </Helmet>
      <Container fluid className='container-geral mt-5'>
        <div>
          <h1>&lt; Projetos &gt;</h1>
        </div>
        <Row xxl={4} xl={4} lg={3} md={2} sm={1} className='mt-3 mb-3'>
          {projects.map((stack, index) => {
            return (
              <ProjectCard
                key={index + 1}
                title={stack.title}
                text={stack.text}
                link={stack.link}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Projetos;