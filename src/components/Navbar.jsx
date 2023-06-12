import React, { useState, useEffect } from 'react';

import MerakaiLogo from '@icons/merakai_studio_logo.svg'

import '@styles/Menu.scss'


export default function Navbar() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 600 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
    <nav className={`navbar ${stickyClass}`}>
      <div>
        <ul className='principal-menu-ul principal-menu-ul-left'>
          <li>
            <a href="#header-section" className="nav-mobile-logo">
                <img src={MerakaiLogo} alt="Logo" />
                Merakai Studio
            </a>
          </li>
        </ul>
  
        <ul className='principal-menu-ul principal-menu-ul-right'>
          <li id='navbar-about-link'><a href="#about-link">About</a></li>
          <li id='navbar-resume-link'><a href="#resume-link">Resume</a></li>
          <li id='navbar-project-link'><a href="#project-link">Porfolio</a></li>
        </ul>
      </div>
    </nav>
  )
}
