import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../services/getData.js'
import { getImages } from '../../utils/getImages.js'
import { Background, Container, Info, Poster, DivButtons } from './styles.js'


function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    const navigate = useNavigate()

    useEffect(() => { // Obs: O useEffect permite que a chamada a api seja apenas uma vez, sem ele seria várias vezes, possivelmente travando a aplicação/pc
        //console.time('time') // Conferir a velocidade de execução do trecho de código entre .time e .timeEnd

        Promise.all([ // Irá buscar todos os dados de uma vez, diferente se fosse async await que seria um de cada vez
            getMovies(),
            getTopMovies(),
            getTopSeries(),
            getPopularSeries(),
            getTopPeople()
        ])
            .then(([movie, topMovies, TopSeries, PopularSeries, TopPeople]) => {// promiseAll irá retornar a array das arrays com os dados, então é possivel nomear a cada posição também com uma array
                setMovie(movie)
                setTopMovies(topMovies)
                setTopSeries(TopSeries)
                setPopularSeries(PopularSeries)
                setTopPeople(TopPeople)
            })
            .catch(error => console.error(error)) // caso houver algum erro será mostrado no console

        //console.timeEnd('time')
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
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button> {/* Apenas colocar o nome da prop, será considerado "true" */}
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