// Qualquer duvida olhar a documentação do axios
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '2a51b144b0d9fcbeadf79af09bd3e1f2',
        language: 'pt-BR',
        page: 1
    }
})

export default api

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

/* 
    Obs: Não precisa se questionar sobre por exemplo, "por que .create?"
    simplesmente porque quem criou escolheu montar dessa forma
    não fique preocupado com isso
*/