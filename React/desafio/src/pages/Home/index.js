import React from "react";
import axious from "axious";

import HomeLogo from "../../assets/home-logo.png";
import { Container, Figure, Section, Label, Input } from "./styles";

import H1 from "../../components/Title";
import Button from "../../components/Button"

import { useNavigate } from "react-router-dom";

const App = () => {

  const navigate = useNavigate()

  const RequestPage = () =>{
    navigate("/pedidos")
  }
  
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

          <Button onClick={RequestPage}>Novo Pedido</Button>
        
      </Section>
    </Container>
  );
};

export default App;
