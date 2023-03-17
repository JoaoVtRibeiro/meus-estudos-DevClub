import React from "react"

// Estilizações do styles.js
import { Body, Container, Figure, Main, H1, Label, Input, Button, User } from "./styles"; // Importação dos componentes CSS

// Imagens
import PeopleTalk from "./assets/Log_in/people-talk.png"
import ArrowRight from "./assets/Log_in/arrow-right.png"
import DeleteButton from "./assets/Sign_up/delete-button.png"


// JSX (Sintaxe que permite html e javascript no mesmo código)
const App = () => {
    const users = [{ id: Math.random, name: "Joao", age: "22" }, { id: Math.random, name: "Maria", age: "23" }]

    return (
        <Body>
            <Container>
                <Figure>
                    <img src={PeopleTalk} alt="Pessoas conversando"></img>
                </Figure>

                <Main>
                    <H1>Olá!</H1>

                    <Label for="Nome">Nome</Label>
                    <Input id="Nome" placeholder="Nome" />

                    <Label for="Idade">Idade</Label>
                    <Input id="Idade" placeholder="Idade" />

                    <Button>Cadastrar<img src={ArrowRight} alt="seta"></img></Button>

                    <ul>
                        {users.map((user) => (
                            <User key={user.id}>
                                <p>{user.name}</p>  <p>{user.age}</p> 
                                <button><img src={DeleteButton} alt="botão de deletar"></img></button>
                            </User>
                        ))}
                    </ul>
                </Main>
            </Container>
        </Body>
    )
}

export default App