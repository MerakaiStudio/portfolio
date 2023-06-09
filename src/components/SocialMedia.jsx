import React from 'react'

import instagramIcon from '@icons/instagram_icon.svg'
import githubIcon from '@icons/github_icon.svg'
import linkdinIcon from '@icons/linkdin_icon.svg'

import '@styles/SocialMedia.scss'

const SocialMedia = () => {
  return (
    <ul className="social-icons">
        <li className="social-media-icon">
            <a href="https://www.linkedin.com/in/richard-layne-b7b217128/" target="_blank" rel="noopener noreferrer">
                <img src={linkdinIcon} alt='icon' />
            </a>
        </li>
        <li className="social-media-icon">
            <a href="https://github.com/darklts" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt='icon' className='icon-media' />
            </a>
        </li>
        <li className="social-media-icon">
            <a href="https://www.instagram.com/richi.layne" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt='icon' />
            </a>
        </li>
    </ul>
  )
}

export default SocialMedia