import React from 'react'

import instagramIcon from '@icons/instagram_icon.svg'
import githubIcon from '@icons/github_icon.svg'
import linkdinIcon from '@icons/linkdin_icon.svg'

import '@styles/SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className="social-icons">
        <a className='social-media-icon' href="https://www.linkedin.com/in/richard-layne-b7b217128/" target="_blank" rel="noopener noreferrer">
            <img src={linkdinIcon} alt='icon' />
        </a>
        <a className='social-media-icon' href="https://github.com/MerakaiStudio" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt='icon' className='icon-media' />
        </a>
        <a className='social-media-icon' href="https://www.instagram.com/richi.layne" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt='icon' />
        </a>
    </div>
  )
}

export default SocialMedia