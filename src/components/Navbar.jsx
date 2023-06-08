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
      // window height changed for the demo
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
          <li><a href="#">About</a></li>
          <li><a href="#">Resume</a></li>
        </ul>
  
        <ul className='principal-menu-ul principal-menu-ul-right'>
          <li><a href="#project-link">Porfolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
