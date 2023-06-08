import React, { useState, useEffect, useRef, forwardRef } from 'react'

import { SwitchButton } from './buttons/Buttons'
import ProjectCard from './card/ProjectCard'

import Fondo from '@images/banner.jpg'

import '@styles/Projects.scss'
import '@styles/buttons/Buttons.scss'

const Projects = forwardRef((props, ref) => {
  const [onProject, setOnProject] = useState(true)

  return (
    <section ref={ref} id='project-link' className='projects-container'>
      <div className='projects-grid-container'>
        <h2>Projects</h2>
        <p>
            Throughout my career as a developer, I have had the opportunity to embark on 
            several personal projects that have allowed me to put into practice my creativity, 
            technical skills and passion for innovation. These personal projects have not only 
            been a source of continuous learning, but also a platform to explore new technologies 
            and demonstrate my ability to take ideas from conceptualization to successful implementation.
        </p>
        <SwitchButton onProject={onProject} setOnProject={setOnProject} />
      </div>

      <div className='projects-grid'>
        <ProjectCard image={Fondo} description={'Descriptions'} link={'https://www.google.com/'} />
        <ProjectCard image={Fondo} description={'Descriptions'} link={'https://www.google.com/'} />
      </div>   
    </section>
  )
})

export default Projects