import { useState, useEffect } from 'react'

import api from '../../services/api'
import { Container, Background } from './styles'

function Card({ movieId, setShowModal}) {
    const [trailer, setTrailer] = useState()

    useEffect(() => {
        async function getTrailer() {
            const {
                data: { results }
            } = await api.get(`movie/${movieId}/videos`)

            setTrailer(results[0])
        }

        getTrailer()
    }, [])

    return (
        <Background>
            {trailer && (
                <Container>
                    <button onClick={() => setShowModal(false)}>x</button>
                    <iframe
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title='Youtube Video Player'
                        height='500px'
                        width='100%'
                    >
                    </iframe>
                </Container>
            )}
        </Background>
    )
}

export default Card