import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import { getMovieCredits, getMovie, getMovieSimilar, getMovieTrailers } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, Cover, Info, ContainerTrailers } from './styles'



function Detail() {
    const [movie, setMovie] = useState()
    const [credits, setCredits] = useState()
    const [trailers, setTrailer] = useState()
    const [similar, setSimilar] = useState()

    const { id } = useParams() // desestruturação, pegando o id dentro de useParams

    useEffect(() => {
        Promise.all([ // passando o id para as chamadas no getData.js
            getMovie(id),
            getMovieCredits(id),
            getMovieTrailers(id),
            getMovieSimilar(id)
        ])
            .then(([movie, credits, trailers, similar]) => {
                // console.log({ movie, credits, trailers, similar }) //{} faz com que o dados cheguem com o nome da sua array na frente
                setMovie(movie)
                setCredits(credits)
                setTrailer(trailers)
                setSimilar(similar)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            {/* movie && Confere se movie é verdadeiro para não dar erro de undefined 'backdrop_path', demora um pouco até a imagem chegar  */}
            {movie && (
                <>
                    <Background img={getImages(movie.backdrop_path)} />

                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={credits} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerTrailers>
                        {trailers && (
                            trailers.map(trailer => (
                                <div key={trailer.id}>
                                    <h4>{trailer.name}</h4>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        title='Youtube Video Player'
                                        height='500px'
                                        width='100%'
                                    >
                                    </iframe>
                                </div>
                            ))
                        )}
                    </ContainerTrailers>
                    {similar && (
                        <Slider title={'Similares'} info={similar}></Slider>
                    )}
                </>
            )}
        </>
    )
}

export default Detail