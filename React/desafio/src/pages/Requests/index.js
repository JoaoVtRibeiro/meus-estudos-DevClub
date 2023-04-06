import React from "react";

import RequestImage from "../../assets/request-burger.png";
import { Container, Figure, Section, } from "./styles";

import H1 from "../../components/Title";
import Button from "../../components/Button"

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate()

  const backToHome = () => {
    navigate("/")
  }

  return (
    <Container>
      <Figure>
        <img src={RequestImage} alt="Logo"></img>
      </Figure>

      <Section>
        <H1>Pedidos</H1>

        

        <Button onClick={backToHome} backButton="true">Voltar</Button>

      </Section>
    </Container>
  );
};

export default App;
