import React from "react"
import axios from 'axios' // Biblioteca para acessar / consumir API

// Importação das estilizações (styles.js) e componentes
import { Container, Figure, User } from "./styles"; // Importação dos componentes CSS

import H1 from '../../components/Title'
import Main from '../../components/MainDiv'
import Button from '../../components/Button'

// Imagens
import UsersImage from "../../assets/Sign_up/users-image.png"
import ArrowLeft from "../../assets/Sign_up/arrow-left.png"
import DeleteButton from "../../assets/Sign_up/delete-button.png"

// React Hooks, Ferramentas Auxiliares do React
import { useState } from "react"; // Criar estados
import { useEffect } from "react"; // Causa "efeitos colaterais", quando a página inicia ou quando estados são alterados
import { useNavigate } from "react-router-dom"; // Permite navegar entre páginas

// JSX (Sintaxe que permite html e javascript no mesmo código)
const Users = () => {

    // Utilizando um React Hook para criar um "Estado/State"
    const [users, setUsers] = useState([]) // [nome do estado, função que atualiza o estado] = useState([itens])
    const navigate = useNavigate()

    useEffect(() => { // Rota Get sendo chamada quando a página é iniciada
        async function fetchUsers() {
            const { data: userList } = await axios.get("http://localhost:3001/users")

            setUsers(userList)
        }

        fetchUsers() // Como useEffect não aceita o async, é necessario criar e chamar uma nova função

    }, []) // [] específica quais estados (quando alterados) vão chamar o useEffect

    async function deleteUser(userIdToDelete) {
        await axios.delete(`http://localhost:3001/users/${userIdToDelete}`)

        const newListUsers = users.filter((user) => user.id !== userIdToDelete);
        setUsers(newListUsers)
    }

    function backToHome() {
        navigate("/")
    }

    return (
        <Container>
            <Figure>
                <img src={UsersImage} alt="Imagem representando os usuários"></img>
            </Figure>

            <Main withBlur={true}>
                <H1>Usuários</H1>

                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                            <p>{user.name}</p>  <p>{user.age} Anos</p>
                            <button onClick={() => deleteUser(user.id)}> {/* Funções com parâmetros precisam ser arrow functions */}
                                <img src={DeleteButton} alt="botão de deletar"></img>
                            </button>
                        </User>
                    ))}
                </ul>

                <Button onClick={backToHome} backButton={true} ><img src={ArrowLeft} alt="seta"></img>Voltar</Button>
            </Main>
        </Container>
    )
}

export default Users