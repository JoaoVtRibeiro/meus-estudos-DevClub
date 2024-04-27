import { v4 as uuid } from 'uuid'
import { useState } from 'react'

import { Container, ToDoList, Input, Button, ListItemBox, Check, Trash, H3 } from './styles'

function App() {
  const [list, setList] = useState([]) // Se cria um estado no react, quando há uma variavel que precisa mostrar seus valores/itens alterados na tela
  const [task, setTask] = useState('')

  function inputChange(event) {
    setTask(event.target.value) // setTask deleta o valor anterior e cria um novo
  }

  function buttonClick() {
    if(task) // Verifica se task (input) está com algum conteúdo, se vazio não adiciona uma task vazia
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

  function deleteTask(id) {
    const newList = list.filter(item => item.id !== id) // Só retorna os itens que são true na condição

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputChange} placeholder="O que tenho que fazer..."></Input>
        <Button onClick={buttonClick}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItemBox key={item.id} isFinished={item.finished}>
                  <Check onClick={() => finishTask(item.id)} /> {/* Sempre que uma função no react envia uma prop, é necessario o () =>, para ela não ativar logo de inicio */}
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} />
                </ListItemBox >
              ))
            ) : (
              <H3>Não há itens na lista</H3>
            )
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
