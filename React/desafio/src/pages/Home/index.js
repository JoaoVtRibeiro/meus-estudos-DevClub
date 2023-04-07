import React from "react";
import axios from "axios";

import HomeLogo from "../../assets/home-logo.png";
import { Container, Figure, Section, Label, Input } from "./styles";

import H1 from "../../components/Title";
import Button from "../../components/Button"

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const inputDemand = useRef()
  const inputName = useRef()
  const navigate = useNavigate()

  async function addNewDemand() {
    const { data } = await axios.post("http://localhost:3001/demand-create", {
      demand: inputDemand.current.value,
      name: inputName.current.value
    })

    navigate("/pedidos")
  }

  return (
    <Container>
      <Figure>
        <img src={HomeLogo} alt="Logo"></img>
      </Figure>

      <Section>
        <H1>Faça seu pedido!</H1>

        <Label for="demand" class="demand">Pedido</Label>
        <Input ref={inputDemand} id="demand" placeholder="Digite seu pedido" autoComplete="off"></Input>

        <Label for="name">Nome</Label>
        <Input ref={inputName} id="name" placeholder="Digite seu nome" autoComplete="off"></Input>

        <Button onClick={addNewDemand}>Novo Pedido</Button>

      </Section>
    </Container>
  );
};

export default App;
