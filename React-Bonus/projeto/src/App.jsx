import { v4 as uuid } from 'uuid'
import { useState } from 'react'

import { FcCheckmark, FcFullTrash } from "react-icons/fc"

import { Container, ToDoList, Input, Button, ListItemBox } from './styles'

function App() {
  const [list, setList] = useState([]) // Se cria um estado no react, quando há uma variavel que precisa mostrar seus valores/itens alterados na tela
  const [task, setTask] = useState('')

  function inputChange(event) {
    setTask(event.target.value) // setTask deleta o valor anterior e cria um novo
  }

  function buttonClick() {
    setList([...list, { id: uuid(), task, finished: false }])
    // quando a chave e o valor tem o mesmo nome, no caso o task, só precisa deixa um dos dois em vez de task: task
    // ...list "espalhando"/"colocando" os itens da array list atual na nova array
  }

  function finishTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputChange} placeholder="O que tenho que fazer..."></Input>
        <Button onClick={buttonClick}>Adicionar</Button>

        <ul>
          {
            list.map(item => (
              <ListItemBox key={item.id} isFinished={item.finished}>
                <FcCheckmark onClick={() => finishTask(item.id)} /> {/* Sempre que uma função no react envia uma prop, é necessario o () =>, para ela não ativar logo de inicio */}
                <li>{item.task}</li>
                <FcFullTrash />
              </ListItemBox>
            ))
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
