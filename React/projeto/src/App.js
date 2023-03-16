import React from "react"

// Estilizações do styles.js
import { Body, Container, Figure, Img, Main, H1, Label, Input, Button } from "./styles"; // Importação dos componentes CSS

// Imagens
import PeopleTalk from "./assets/Log_in/people-talk.png"
import ArrowRight from "./assets/Log_in/arrow-right.png"


// JSX (Sintaxe que permite html e javascript no mesmo código)
const App = () => {
    const users = [{ id: Math.random, name: "Joao", age: "22" }, { id: Math.random, name: "Maria", age: "23" }]

    return (
        <Body>
            <Container>
                <Figure>
                    <Img src={PeopleTalk} alt="Pessoas conversando"></Img>
                </Figure>

                <Main>
                    <H1>Olá!</H1>

                    <Label for="Nome">Nome</Label>
                    <Input id="Nome" placeholder="Nome" />

                    <Label for="Idade">Idade</Label>
                    <Input id="Idade" placeholder="Idade" />

                    <Button>Cadastrar<Img src={ArrowRight} alt="seta"></Img></Button>

                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.name} - {user.age}
                            </li>
                        ))}
                    </ul>
                </Main>
            </Container>
        </Body>
    )
}

export default App