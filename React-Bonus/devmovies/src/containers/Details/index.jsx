import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from './styles'
import { getMovieCredits, getMovieDetails, getMovieSimilar, getMovieTrailers } from '../../services/getData'

function Detail() {
    const [details, setDetails] = useState()
    const [credits, setCredits] = useState()
    const [trailers, setTrailer] = useState()
    const [similar, setSimilar] = useState()

    const { id } = useParams() // desestruturação, pegando o id dentro de useParams

    useEffect(() => {
        Promise.all([ 
            getMovieDetails(id),
            getMovieCredits(id),
            getMovieTrailers(id),
            getMovieSimilar(id)
        ])
            .then(([details, credits, trailers, similar]) => {
                // console.log({details, credits, trailers, similar}) {} faz com que o dados cheguem com o nome da sua array na frente
                setDetails(details)
                setCredits(credits)
                setTrailer(trailers)
                setSimilar(similar)
            })
            .catch(error => console.error(error)) 
    }, []) 

    return (
        <Container>
            <h1>Hello World</h1>
        </Container>
    )
}

export default Detail