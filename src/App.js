import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './pages/Footer'
import { Header } from './pages/Header'
import { Home } from './pages/Home'
import Login from './pages/Login'
import { NotFound } from './pages/NotFound'
import About from './pages/About'
import Professionals from './pages/Professionals'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="login" element={<Login />} />
                <Route path="about" element={<About/>} />
                <Route path="professionals/:id" element={<Professionals />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App