import React, { useState, useEffect, useRef } from 'react'

import Header from '@components/Header.jsx'
import Navbar from '@components/Navbar.jsx'
import About from '@components/About.jsx'
import Experience from '@components/Experience'
import Projects from '@components/Projects'
import NavbarMobile from '@components/NavbarMobile'

const index = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    console.log(isIntersecting);
    console.log(ref.current, 'ref');
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavbarMobile />
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects ref={ref}/>
    </>
  )
}

export default index