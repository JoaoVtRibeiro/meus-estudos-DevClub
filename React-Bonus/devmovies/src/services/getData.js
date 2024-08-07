import api from './api'

export async function getMovies() {
    const {
        data: { results } // desestruturação, irá diretamente na array de results dentro de data
    } = await api.get('movie/popular')

    return results[1]
}

export async function getTopMovies() {
    const {
        data: { results }
    } = await api.get('movie/top_rated')

    return results
}

export async function getTopSeries() {
    const {
        data: { results }
    } = await api.get('tv/top_rated')

    return results
}

export async function getPopularSeries() {
    const {
        data: { results }
    } = await api.get('tv/popular')

    return results
}

export async function getTopPeople() {
    const {
        data: { results }
    } = await api.get('person/popular')

    return results
}

export async function getMovieTrailer(movieId) {
    const {
        data: { results }
    } = await api.get(`movie/${movieId}/videos`)

    return results[0]
}

export async function getMovieTrailers(movieId) {
    const {
        data: { results }
    } = await api.get(`movie/${movieId}/videos`)

    return results
}

export async function getMovie(movieId) {
    const {
        data
    } = await api.get(`movie/${movieId}`)

    return data
}

export async function getMovieCredits(movieId) {
    const {
        data: { cast }
    } = await api.get(`movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimilar(movieId) {
    const {
        data: { results }
    } = await api.get(`movie/${movieId}/similar`)

    return results
}