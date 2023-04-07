import React from "react";
import axios from 'axios';

import DemandImage from "../../assets/request-burger.png";
import DeleteButton from "../../assets/delete-button.png";
import { Container, Figure, Section, ClientList, Client} from "./styles";

import H1 from "../../components/Title";
import Button from "../../components/Button"

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate()

  const [demandList, setDemandList] = useState([])

  useEffect(() => {
    async function fetchDemands() {
      const { data: uptadeList } = await axios.get("http://localhost:3001/demand-list")

      setDemandList(uptadeList)
    }

    fetchDemands()
  }, [])

  async function deleteDemand(demandIdToDelete){
    await axios.delete(`http://localhost:3001/demand-delete/${demandIdToDelete}`)

    const uptadeList = demandList.filter(user => user.id !== demandIdToDelete)

    setDemandList(uptadeList)
  }

  const backToHome = () => {
    navigate("/")
  }

  return (
    <Container>
      <Figure>
        <img src={DemandImage} alt="Logo"></img>
      </Figure>

      <Section>
        <H1>Pedidos</H1>

        <ClientList>
          {demandList.map(client => (
            <Client key={client.id}>
              <p id="p-demand">{client.demand}</p> 
              <p id="p-name">{client.name}</p> 
              <button onClick={() => deleteDemand(client.id)}><img src={DeleteButton} alt="Deletar o pedido"></img></button>
            </Client>
          ))}    
        </ClientList>

        <Button onClick={backToHome} backButton="true">Voltar</Button>

      </Section>
    </Container>
  );
};

export default App;
