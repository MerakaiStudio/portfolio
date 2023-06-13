import React from 'react'

import Header from '@pages/Header.jsx'
import Navbar from '@components/Navbar.jsx'
import About from '@pages/About.jsx'
import Experience from '@pages/Experience'
import Projects from '@pages/Projects'
import NavbarMobile from '@components/NavbarMobile'

const index = () => {

  return (
    <>
      <NavbarMobile />
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </>
  )
}

export default index