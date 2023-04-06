import React from "react";

import HomeLogo from "../../assets/request-burger.png";
import { Container, Figure, Section,} from "./styles";

import H1 from "../../components/Title";
import Button from "../../components/Button"

const App = () => {
  return (
    <Container>
      <Figure>
        <img src={HomeLogo} alt="Logo"></img>
      </Figure>

      <Section>
        <H1>Pedido</H1>
      


          <Button backButton="true">Voltar</Button>
        
      </Section>
    </Container>
  );
};

export default App;
