import React from 'react'

import '@styles/cards/ProjectCard.scss'
import TagLenguage from '../tags/TagLenguage'
import { ColorBorderButton } from '../buttons/Buttons'

import viewIcon from '@icons/view-icon.svg'
import ImgDefault from '@images/banner.jpg'

const ProjectCard = ({ image, description, title, tags, link, buttonTitle }) => {
  console.log(buttonTitle);
  return (
    <div className='project-card-container'>
      <img  className='project-card-img' src={image ? image : ImgDefault} alt="img" />
      <div className='project-card-content'>
        <h2>{title ? title : 'Title'}</h2>
        <p>{description ? description : 'Description'}</p>
        <div className='project-card-tags'>
          {tags?.map((tag) =>
            <TagLenguage title={tag}/>
          )}
        </div>
        {link ?
          <div className='buttom-resume'>
            <ColorBorderButton icon={viewIcon} title={buttonTitle} link={link} />
          </div>
          : null  
        }
      </div>
    </div>
  )
}

export default ProjectCard