import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

function DefaultLayout() {
    return (
        <>
            {/* <Header /> */}
            <Outlet /> {/* Será a página atual da rota, por exemplo se o path for "/movies" outlet será <Movies />*/}
        </>
    )
}

export default DefaultLayout