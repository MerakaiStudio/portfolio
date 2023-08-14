import React, { useRef } from 'react'

import ImageLabel from '@components/labels/ImageLabel';

import Code from '@icons/code_icon.svg'
import WebDeveloper from '@icons/web_developer_icon.svg'
import GraphicDesign from '@icons/graphic_design_icon.svg'
import ReactJS from '@icons/react-js-icon.svg'
import Tailwind from '@icons/tailwind-css-icon.svg'
import Typescript from '@icons/Typescript_icon.svg'
import Webpack from '@icons/webpack-icon.svg'
import Node from '@icons/node-js-icon.svg'
import Postgres from '@icons/postgresql-icon.svg'
import Python from '@icons/python-icon.svg'
import Photoshop from '@icons/photoshop-icon.svg'
import Illustrator from '@icons/illustrator-icon.svg'
import CostaRicaFlag from '@icons/Flag_of_Costa_Rica.svg'

import '@styles/About.scss'
import ListLabel from '@components/labels/ListLabel';
import useNavbarSeleted from '@hooks/useNavbarSeleted';

const frontendList = [
    {
        icon: ReactJS,
        name: 'react'
    },
    {
        icon: Tailwind,
        name: 'Tailwind'
    },
    {
        icon: Typescript,
        name: 'Typescript'
    },
    {
        icon: Webpack,
        name: 'Webpack'
    },
]

const backendList = [
    {
        icon: Node,
        name: 'node'
    },
    {
        icon: Postgres,
        name: 'Postgres'
    },
    {
        icon: Python,
        name: 'Python'
    }
]

const designerList = [
    {
        icon: Photoshop,
        name: 'photoshop'
    },
    {
        icon: Illustrator,
        name: 'illustrator'
    }
]

const About = () => {
    const ref = useRef(null);

    useNavbarSeleted(ref)

  return (
    <section ref={ref} id='about-link' className='about-container'>
        <div className='about-iam'>
            <div className='about-iam-text'>
                <h4>
                    Hi over there! I'm Richard Layne
                </h4>
                <p>
                    I am a passionate and versatile programmer and graphic designer. With technical 
                    and creative skills, I bring ideas to life through lines of code and stunning visual 
                    designs. My passion for both disciplines is reflected in the constant pursuit of 
                    excellence and the ability to combine the functional with the aesthetic. I consider 
                    myself a digital artist, a problem solver and a creator of memorable experiences.
                </p>
                <div className='costa-rica-flag'>
                    <img src={CostaRicaFlag} alt="" />
                    <span>Pura vida!!!</span>
                </div>
            </div>
        </div>
        <div className='about-table'>
            <ImageLabel
                image={Code} 
                title='Backend Developer' 
                subtitle='Software is the bridge between imagination & reality'
                description='These are my skills'
            >
                {backendList.map( element =>  
                    <ListLabel 
                        name={element.name} 
                        icon={element.icon}
                        key={Math.random()}
                    />
                )}
            </ImageLabel>
            <ImageLabel 
                image={WebDeveloper} 
                title='Frontend Developer' 
                subtitle='Code is my canvas and programming my art form'
                description='These are my skills'
            >
                {frontendList.map( element =>  
                    <ListLabel 
                        name={element.name} 
                        icon={element.icon}
                        key={Math.random()}
                    />
                )}
            </ImageLabel> 
            <ImageLabel
                image={GraphicDesign} 
                title='Graphic Designer' 
                subtitle='You make my heart skip a beat with your creations'
                description='These are my skills'
            >
                {designerList.map( element =>  
                    <ListLabel 
                        name={element.name} 
                        icon={element.icon}
                        key={Math.random()}
                    />
                )}
            </ImageLabel>
        </div>
    </section>
  )
}

export default About