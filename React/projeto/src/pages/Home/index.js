import React from "react"
import axios from 'axios' // Biblioteca para acessar / consumir API

// Estilizações do styles.js
import { Body, Container, Figure, Main, H1, Label, Input, Button } from "./styles"; // Importação dos componentes CSS

// Imagens
import PeopleTalk from "../../assets/Log_in/people-talk.png"
import ArrowRight from "../../assets/Log_in/arrow-right.png"

// React Hooks, Ferramentas Auxiliares do React
import { useState } from "react"; // Criar estados
import { useRef } from "react"; // Permite utilizar os componentes como referência e com isso acessar os valores de suas propriedades

// JSX (Sintaxe que permite html e javascript no mesmo código)
const App = () => {

    // Utilizando um React Hook para criar um "Estado/State"
    const [users, setUsers] = useState([]) // [nome do estado, função que atualiza o estado] = useState([itens])
    const inputName = useRef() // Variaveis dos inputs usadas para referenciar o componente
    const inputAge = useRef()

    async function addNewUser() {

        const { data: newUser } = await axios.post("http://localhost:3001/users", { // axios.tipodarota("endereçodarota", {dados em .json})
            name: inputName.current.value,
            age: inputAge.current.value
        })

        console.log(newUser)
        setUsers([...users, newUser]) // Spread "espalhando" os itens do array anterior no novo array
    }

    return (
        <Body>
            <Container>
                <Figure>
                    <img src={PeopleTalk} alt="Pessoas conversando"></img>
                </Figure>

                <Main>
                    <H1>Olá!</H1>

                    <Label for="Nome">Nome</Label>
                    <Input ref={inputName} id="Nome" placeholder="Nome" />

                    <Label for="Idade">Idade</Label>
                    <Input ref={inputAge} id="Idade" placeholder="Idade" />

                    <Button onClick={addNewUser}>Cadastrar<img src={ArrowRight} alt="seta"></img></Button>

                </Main>
            </Container>
        </Body>
    )
}

export default App