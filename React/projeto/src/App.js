import React from "react"

import { Main, Figure, Img, Section, H1, Label, Input, Button } from "./styles"; // Importação dos componentes CSS

// JSX (Sintaxe que permite html e javascript no mesmo código)
const App = () => {
    return (
        <Main>
            <Figure>
                <Img></Img>
            </Figure>

            <Section>
                <H1>Olá!</H1>

                <Label for="Nome">Nome</Label>
                <Input id="Nome" placeholder="Nome" />


                <Label for="Idade">Idade</Label>
                <Input id="Idade" placeholder="Idade" />

                <Button>Cadastrar</Button>
            </Section>
        </Main>
    )
}

export default App