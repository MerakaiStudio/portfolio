import React from 'react'

import instagramIcon from '@icons/instagram_icon.svg'
import githubIcon from '@icons/github_icon.svg'
import linkdinIcon from '@icons/linkdin_icon.svg'

import '@styles/SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/richard-layne-b7b217128/" target="_blank" rel="noopener noreferrer">
          <button className='social-media-icon' type='button' >
            <img src={linkdinIcon} alt='icon' />
          </button>
        </a>
        <a className='social-media-icon' href="https://github.com/MerakaiStudio" target="_blank" rel="noopener noreferrer">
          <button className='social-media-icon' type='button' >
            <img src={githubIcon} alt='icon' className='icon-media' />
          </button>
        </a>
        <a className='social-media-icon' href="https://www.instagram.com/richi.layne" target="_blank" rel="noopener noreferrer">
          <button className='social-media-icon' type='button' >
            <img src={instagramIcon} alt='icon' />
          </button>
        </a>
    </div>
  )
}

export default SocialMedia