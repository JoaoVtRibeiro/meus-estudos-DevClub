import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'
import api from '../../services/api'
import { getImages } from '../../utils/getImages.js'
import { Background, Container, Info, Poster, DivButtons } from './styles.js'

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    useEffect(() => { // Obs: O useEffect permite que a chamada a api seja apenas uma vez, sem ele seria várias vezes, possivelmente travando a aplicação/pc
        async function getMovies() {
            const {
                data: { results } // desestruturação, irá diretamente na array de results dentro de data
            } = await api.get('movie/popular')

            setMovie(results[0])
        }

        async function getTopMovies() {
            const {
                data: { results }
            } = await api.get('movie/top_rated')

            setTopMovies(results)
        }

        async function getTopSeries() {
            const {
                data: { results }
            } = await api.get('tv/top_rated')

            setTopSeries(results)
        }

        async function getPopularSeries() {
            const {
                data: { results }
            } = await api.get('tv/popular')

            setPopularSeries(results)
        }

        async function getTopPeople() {
            const {
                data: { results }
            } = await api.get('person/popular')

            setTopPeople(results)
        }

        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopPeople()
    }, []) // Executa quando vazio uma variavel/state for alterada, quando vazio executa quando a página é iniciada

    return (
        <>
            {movie && ( // Se move existir (evitar erro de não encontrado no console, já que o state inicia vazio)
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <DivButtons>
                                <Button red>Assista Agora</Button> {/* Apenas colocar o nome da prop, será considerado "true" */}
                                <Button white onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </DivButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt='capa-do-filme' />
                        </Poster>
                    </Container>
                </Background>
            )}

            {topMovies && (
                <Slider title={'Top Filmes'} info={topMovies}></Slider>
            )}

            {topSeries && (
                <Slider title={'Top Series'} info={topSeries}></Slider>
            )}

            {popularSeries && (
                <Slider title={'Series mais populares'} info={popularSeries}></Slider>
            )}

            {topPeople && (
                <Slider title={'Atores mais populares'} info={topPeople}></Slider>
            )}
        </>
    )
}

export default Home