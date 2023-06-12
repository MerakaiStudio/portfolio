import React from 'react'

import Header from '@components/Header.jsx'
import Navbar from '@components/Navbar.jsx'
import About from '@components/About.jsx'
import Experience from '@components/Experience'
import Projects from '@components/Projects'
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