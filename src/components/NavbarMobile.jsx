import React, { useState} from 'react'

import ListMenuIcon from '@icons/menu-list-icon.svg'
import MerakaiLogo from '@icons/merakai_studio_logo.svg'

import '@styles/Menu.scss'

const NavbarMobile = () => {
    const [ showMenu, setShowMenu ] = useState(false)

    const handleShowMenu = () => setShowMenu(!showMenu)
  return (
    <>
        <div className="nav-mobile-header">
            <a href="#" className="nav-mobile-logo">
                <img src={MerakaiLogo} alt="Logo" />
                Merakai Studio
            </a>
            <label className="nav-mobile-hamb" htmlFor="side-menu" onClick={handleShowMenu}>
                <img src={ListMenuIcon} alt="List Icon" />
            </label>
        </div>
        {showMenu &&
            <nav className="nav-mobile">
                <ul className="nav-mobile-menu">
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Blog</a> </li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        }
    </>
  )
}

export default NavbarMobile