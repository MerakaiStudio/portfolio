import React from 'react'

import '@styles/cards/ProjectCard.scss'

const ProjectCard = ({ image, description, link }) => {
  return (
    <div className='project-card-container'>
        <a href={link} target='_blank'>
            <img src={image} alt="img" />
            <p>{description}</p>
        </a>
    </div>
  )
}

export default ProjectCard