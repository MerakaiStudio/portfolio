import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '@pages/home'
import About from '@pages/About.jsx'
import Experience from '@pages/Experience.jsx'
import Projects from '@pages/Projects.jsx'

import '@styles/global.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='experience' element={<Experience />} />
                <Route path='Projects' element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App