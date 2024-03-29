import React from "react"
import axios from 'axios' // Biblioteca para acessar / consumir API

// Importação das estilizações (styles.js) e componentes
import { Container, Figure, Label, Input} from "./styles"; // Importação dos componentes CSS

import H1 from '../../components/Title'
import Main from '../../components/MainDiv'
import Button from '../../components/Button'

// Imagens
import PeopleTalk from "../../assets/Log_in/people-talk.png"
import ArrowRight from "../../assets/Log_in/arrow-right.png"

// React Hooks, Ferramentas Auxiliares do React
import { useState } from "react"; // Criar estados
import { useRef } from "react"; // Permite utilizar os componentes como referência e com isso acessar os valores de suas propriedades
import { useNavigate } from "react-router-dom" // Permite navegar entre páginas

// JSX (Sintaxe que permite html e javascript no mesmo código)
const App = () => {

    // Utilizando um React Hook para criar um "Estado/State"
    const [users, setUsers] = useState([]) // [nome do estado, função que atualiza o estado] = useState([itens])
    const inputName = useRef() // Variaveis dos inputs usadas para referenciar o componente
    const inputAge = useRef()
    const navigate = useNavigate() 

    async function addNewUser() {

        const { data: newUser } = await axios.post("http://localhost:3001/users", { // axios.tipodarota("endereçodarota", {dados em .json})
            name: inputName.current.value,
            age: inputAge.current.value
        })

        console.log(newUser)
        setUsers([...users, newUser]) // Spread "espalhando" os itens do array anterior no novo array

        navigate("/users")
    }

    return (
        <Container>
            <Figure>
                <img src={PeopleTalk} alt="Pessoas conversando"></img>
            </Figure>

            <Main>
                <H1>Olá!</H1>

                <Label for="Nome">Nome</Label>
                <Input ref={inputName} id="Nome" placeholder="Nome" autoComplete="off" />

                <Label for="Idade">Idade</Label>
                <Input ref={inputAge} id="Idade" placeholder="Idade" autoComplete="off" />

                <Button onClick={addNewUser}>Cadastrar<img src={ArrowRight} alt="seta"></img></Button>

            </Main>
        </Container>
    )
}

export default App