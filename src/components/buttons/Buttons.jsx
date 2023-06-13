import React, { useState } from 'react'


import '@styles/buttons/Buttons.scss'

const PrintButton = ({ icon, title, link}) => (
    <a  className='print-button' href={link} download="Richard Layne - Resumé">
      <button 
           className='print-button'
          type='button'
      >
          <img className='print-icon' src={icon} alt='print' />
          <span className='span-icon'>{title}</span>
      </button>
    </a>
)


const ColorBorderButton = ({ icon, title, link }) => (
  <a  href={link} target='_blank'>
    <button 
      className='color-border-button' 
      type='button' 
    >
      <img src={icon} alt='icon' />
      <span>{title}</span>
    </button>
  </a>
)

const SwitchButton = ({ onProject, setOnProject }) => {
  const handleProject = () => {
    setOnProject(true)
  }

  const handleDesigner = () => {
    setOnProject(false)
  }

  return (
    <div className='switch-button'>
      <button 
        className={`switch-button-left ${onProject && 'switch-button-active'}`} 
        onClick={handleProject} 
      >
        Development
      </button>
      <button 
        className={`switch-button-right ${!onProject && 'switch-button-active'}`} 
        onClick={handleDesigner} 
      >
        Designer
      </button>
    </div>
  )

}

export {
  PrintButton,
  ColorBorderButton,
  SwitchButton
}