import { v4 as uuid } from 'uuid'
import { useState } from 'react'

import { Container } from './styles'

function App() {
  const [list, setList] = useState([]) // Se cria um estado no react, quando há uma variavel que precisa mostrar seus valores/itens alterados na tela
  const [task, setTask] = useState('')

  function inputChange(event) {
    setTask(event.target.value) // setTask deleta o valor anterior e cria um novo
  }

  function buttonClick() {
    setList([...list, { id: uuid(), task }])
    // quando a chave e o valor tem o mesmo nome, no caso o task, só precisa deixa um dos dois em vez de task: task
    // ...list "esparramando"/"colocando" os itens da array list atual na nova array
  }

  return (
    <Container>
      <input onChange={inputChange} placeholder="O que tenho que fazer..."></input>
      <button onClick={buttonClick}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </Container>
  )
}

export default App
