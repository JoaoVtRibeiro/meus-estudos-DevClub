import React from "react"

// Estilizações do styles.js
import { Body, Container, Figure, Main, H1, Label, Input, Button, User } from "./styles"; // Importação dos componentes CSS

// Imagens
import PeopleTalk from "./assets/Log_in/people-talk.png"
import ArrowRight from "./assets/Log_in/arrow-right.png"
import DeleteButton from "./assets/Sign_up/delete-button.png"

// React Hooks, Ferramentas Auxiliares do React
import { useState } from "react"; // Criar estados
import { useRef } from "react"; // Permite utilizar os componentes como refencia e obter os valores de suas propriedades
// JSX (Sintaxe que permite html e javascript no mesmo código)
const App = () => {

    // Utilizando um React Hook para criar um "Estado/State"
    const [users, setUsers] = useState([]) // [nome do estado, função que atualiza o estado] = useState([itens])
    const inputName = useRef() // Variaveis dos inputs usadas para referenciar o componente
    const inputAge = useRef()

    function addNewUser() {
        setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }]) // Spread "espalhando" os itens do array anterior no novo array
    }

    function deleteUser(userIdToDelete) {
        const newUsers = users.filter((user) => user.id !== userIdToDelete);
        setUsers(newUsers)
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

                    <ul>
                        {users.map((user) => (
                            <User key={user.id}>
                                <p>{user.name}</p>  <p>{user.age}</p>
                                <button onClick={() => deleteUser(user.id)}> {/* Funções com parâmetros precisam ser arrow functions */ }
                                    <img src={DeleteButton} alt="botão de deletar"></img>
                                </button>
                            </User>
                        ))}
                    </ul>
                </Main>
            </Container>
        </Body>
    )
}

export default App