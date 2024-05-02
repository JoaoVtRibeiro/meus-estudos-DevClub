import { Route, Routes } from 'react-router-dom'

import DefaultLayout from '../layout/DefaultLayout'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import Detail from '../containers/Details'

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}> {/* Aplica o layout(element) a todas a routas dentro desta */}
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/detalhe/:id' element={<Detail />} /> {/* Colocando os dois pontos, idica que esse valor será dinamico */}
            </Route>
        </Routes>
    )
}

export default Router