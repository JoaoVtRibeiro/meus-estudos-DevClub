import React from "react";

import HomeLogo from "../../assets/home-logo.png";
import { Container, Figure, Section, Label, Input } from "./styles";

import H1 from "../../components/Title";
import Button from "../../components/Button"

const App = () => {
  return (
    <Container>
      <Figure>
        <img src={HomeLogo} alt="Logo"></img>
      </Figure>

      <Section>
        <H1>Faça seu pedido!</H1>
      
          <Label for="pedido" class="pedido">Pedido</Label>
          <Input id="pedido" placeholder="Digite seu pedido"></Input>

          <Label for="nome">Nome</Label>
          <Input id="nome" placeholder="Digite seu nome"></Input>

          <Button>Novo Pedido</Button>
        
      </Section>
    </Container>
  );
};

export default App;
