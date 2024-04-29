import { useState, useEffect } from 'react'

import api from '../../services/api'
import { Background, Container, Info, Poster, DivButtons } from './styles.js'
import Button from '../../components/Button'

function Home() {
    const [movie, setMovie] = useState()

    useEffect(() => { // Obs: Esse useEffect permite que a chamada a api seja apenas uma vez, sem ele seria várias vezes, travando a aplicação/pc
        async function getMovies() {
            const {
                data: { results } // desestruturação, irá diretamente na array de results dentro de data
            } = await api.get('/movie/popular')

            setMovie(results[0])
            console.log(movie)
        }

        getMovies()
    }, []) // Executa quando vazio uma variavel/state for alterada, quando vazio executa quando a página é iniciada

    return (
        <>
            {movie && ( // Se move existir (evitar erro de não encontrado no console, já que o state inicia vazio)
                <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <DivButtons>
                                <Button red>Assista Agora</Button> {/* Apenas colocar o nome da prop, será considerado "true" */}
                                <Button white>Assista o Trailer</Button>
                            </DivButtons>
                        </Info>
                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='capa-do-filme' />
                        </Poster>
                    </Container>
                </Background>
            )}
        </>
    )
}

export default Home