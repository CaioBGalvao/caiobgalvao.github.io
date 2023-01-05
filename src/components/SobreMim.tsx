import './SobreMim.css'

import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import React from 'react';

function SobreMim() {
  return (
    <Container className='container-sobre-mim bg-light mt-2'>
      <Accordion className='mb-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Minha primeira linguagem e um grande sonho</Accordion.Header>
          <Accordion.Body>
            No meio do ensino médio, entrei no <strong>colégio técnico de informática</strong> e estudei Visual Basic. Foi meu primeiro contato com programação. Eu sabia que gostava de programar software e organizar minhas equipes em projetos de grupo. Comecei o <strong>curso de Java na Caelum</strong> e decidi me tornar <strong>gerente de projetos</strong>, me especializando em tecnologias da informação. Isso porque um gerente de equipe da Vivo me explicou que poucos gerentes sabiam o que suas equipes estavam fazendo em código. E outros que eram da área mas não eram bons gestores.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Meu curso superior</Accordion.Header>
          <Accordion.Body>
            Entrei na Faculdade Estácio de Sá para cursar <strong>Administração de Empresas</strong>. Concluí meu bacharelado. Trabalhei por quatro anos em uma empresa familiar nas áreas de Recursos Humanos, Marketing, Administração e Contabilidade. Foi quando comecei a estudar muito mais do que a faculdade havia me ensinado. Aprendi muito com essa experiência empreendedora. Usei meus conhecimentos prévios de informática para traduzir processos em tabelas automáticas de Excel, implementar ERP, configurar perfis de anúncios no Google Ads com as palavras-chave SEO da minha franquia, e outras coisas mais voltadas para o Webmaster.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>A Trybe</Accordion.Header>
          <Accordion.Body>
            Em dezembro de 2021 descobri o <strong>Trybe</strong> através da minha namorada. A proposta do curso me deixou muito empolgado com a possibilidade de voltar a trabalhar com TI. Estou muito interessado em como os sites funcionam. Foi então que saí da minha zona de conforto e aceitei o desafio de aprender em 1 ano todas as habilidades necessárias para me tornar um programador completo de desenvolvimento de aplicações web.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>O módulo de Fundamentos</Accordion.Header>
          <Accordion.Body>
            A Trybe tem quatro módulos: <strong>Fundamentos, Front-End, Back-End e Ciência da Computação</strong>. Para o módulo <strong>Fundamentos</strong>, eu tinha <strong>Linux, Git, HTML5, CSS3, JavaScript Es6 e Jest para testes unitários</strong>. Além de começar a ter aulas de Soft Skills. Nesse módulo, tivemos um projeto super desafiador na época, o Zoo Functions. Este projeto teve como objetivo obter informações sobre objetos JavaScript. Eu tinha um arquivo JSON com uma simulação de uma resposta da API do zoológico. Usei vários HOF para filtrar, mapear e verificar informações dentro do Objeto. Dei meus primeiros passos na jornada de Soft Skills onde vimos <strong>Autoliderança, Gestão do Tempo, Assertividade, Diversidade e Inclusão</strong>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>O módulo de Front-End</Accordion.Header>
          <Accordion.Body>
            <strong>Front–End</strong> foi uma descoberta incrível de como a WEB se comportava. Aprendemos <strong>React.Js</strong> e vários recursos como <strong>React Router Dom V5, Redux.Js, React Hooks, Context API e React Testing Library para testes unitários e integração</strong>. O projeto mais desafiador desse módulo foi o Trybe Wallet, usei Redux para gerenciar o Estado Global da Aplicação passando valores para outros componentes Reacts sem gerar Props Drilling. Sua implementação inicial é bastante complexa. Depois de criar as Actions, Reducers e Stores ficou fácil entender o resto do conceito. No Soft Skills, entramos na jornada <strong>Eu e o Mundo</strong>, onde tivemos conteúdos de <strong>comunicação e escuta ativa, negociação, inteligência emocional, empatia, resiliência e gestão do tempo</strong>. Tivemos vários debates, discussões e reuniões para treinar nossas habilidades de equipe e ajudar outros alunos a se abrirem mais.<br></br>
            A jornada de <strong>Criatividade e Colaboração</strong> foi separada no módulo Front e Back-end, onde conversamos e discutimos sobre <strong>criatividade e como superar as barreiras da criatividade, ideação, assertividade na comunicação para colaboração, times de desenvolvimento ágil e a importância do feedback na colaboração</strong>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>O módulo de Back-End</Accordion.Header>
          <Accordion.Body>
            Quanto ao <strong>Back-End</strong>, aprendi que servidores web rodam em <strong>Node.Js</strong> usando JavaScript. Isso é extremamente interessante, pois pensei que algo assim só seria possível em C + + ou Java. Começamos aprendendo <strong>MySQL</strong> para criar o banco de dados. Então aprendemos <strong>Docker e APIs com Express.Js</strong>. Evoluímos as coisas quando aprendemos um <strong>ORM</strong> chamado <strong>Sequelize.Js</strong> e autenticação usando <strong>JWT</strong>. Foi então que surgiu um novo desafio com o que Trybe chamou de Back-End 2. Eles começaram a ensinar <strong>TypeScript</strong> e o conceito de programação <strong>SOLID e Programação Orientada a Objetos</strong>.<br></br>
            Um dos projetos TypeScript mais desafiadores foi o Trybe Futebol Clube quando fizemos uma API em MSC usando todos os conceitos do SOLID. Admito que entender a inversão de dependências foi o mais complicado.<br></br>
            Depois desse projeto, também tivemos APIs com <strong>MongoDB e Mongoose</strong> para aprender a usar um banco de dados não relacional e seu <strong>ODM</strong>. Essa parte foi extremamente divertida porque usar JSON em um banco de dados é um recurso absurdo. Espero um dia sentar para aprender Redis e tentar fazer um micro serviço de cache para buscas. Ouvi dizer que o Twitter usa dessa forma. No Back-end também tivemos uma jornada chamada <strong>Rumo ao Mercado</strong>, tivemos <strong>raciocínio lógico, lógica, e o mais legal: Liderança</strong>. Além disso, tivemos vários workshops de momentos de carreira com diferentes profissionais que a Trybe sempre traz para conversar para apresentar novidades e uma visão mais realista do mercado e do dia a dia de um desenvolvedor.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default SobreMim;