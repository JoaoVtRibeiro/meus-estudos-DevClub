import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Requests from './pages/Requests'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pedidos" element={<Requests />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes