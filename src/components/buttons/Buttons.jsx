import React, { useState } from 'react'

import '@styles/buttons/Buttons.scss'

const PrintButton = ({ icon, title}) => {
    const handleClick = () => {
        console.log('hola')
    }
  return (
    <button 
        className='print-button' 
        type='button' 
        onClick={handleClick}
    >
        <img className='print-icon' src={icon} alt='print' />
        <span className='span-icon'>{title}</span>
    </button>
  )
}

const ColorBorderButton = ({ icon, title }) => {
  const handleClick = () => {
    console.log('hola')
  }

  return (
    <button 
      className='color-border-button' 
      type='button' 
      onClick={handleClick}
    >
      <img src={icon} alt='icon' />
      <span>{title}</span>
    </button>
  )
}

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
        Projects
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