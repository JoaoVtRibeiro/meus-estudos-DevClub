import React from "react"

import { Container, H1 } from "./styles"; // Importação dos componentes CSS

// JSX (Sintaxe que permite html e javascript no mesmo código)
const App = () => {
    const hello = "Hello React"

    return (
        <Container>
            <H1>{hello}</H1>
        </Container>
    )
}

export default App