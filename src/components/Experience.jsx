import React, { useRef } from 'react'

import '@styles/Experience.scss'
import JobPosition from './labels/JobPosition'
import { ColorBorderButton } from './buttons/Buttons'

import viewIcon from '@icons/view-icon.svg'
import CV from '@files/cv.pdf'
import useNavbarSeleted from '../hooks/useNavbarSeleted'
 
const Experience = () => {

    const ref = useRef(null);

    useNavbarSeleted(ref)

  return (
    <section ref={ref} id='resume-link' className='experience-container'>
        <h2>Experiences</h2>
        <div className='experience-grid'>
            <div className='experience-grid-text'>
                <p>
                    Throughout my professional career, I have been fortunate to gain 
                    valuable experience in various work environments. Each opportunity 
                    has provided me with a unique scenario to learn, grow and face new challenges.
                </p>
                <p>
                    In summary, my journey in the workplace has equipped me with a diverse set of 
                    skills and knowledge. I have learned to adapt to changing environments, work as 
                    part of a team, and face challenges with determination and resilience. I am excited 
                    to continue to grow and take advantage of every new opportunity that presents itself, 
                    always seeking to exceed expectations and achieve outstanding results.
                </p>
                <div className='experience-buttom-resume'>
                    <ColorBorderButton icon={viewIcon} title={'View Full Resume'} link={CV} />
                </div>
            </div>
            <div className='experience-grid-card'>
                <JobPosition 
                    title={'Digital transformation'}
                    company={'SOIN'}
                    date={'feb - present'}
                    description={'I successfully drove the adoption of digital solutions, identifying opportunities for improvement and designing and implementing effective strategies. Clients was Department of Health, Department of Immigration and Department of IRS of the government of Costa Rica'}
                />
                <JobPosition 
                    title={'Entry level Software Developer'}
                    company={'SOIN'}
                    date={'jun -  feb 2022'}
                    description={'Developed, maintained and shipped production code with high standards of quality for web system project. The client was the Department of Health of Costa Rica'}
                />
                <JobPosition 
                    title={'Software Developer Entership'}
                    company={'SOIN'}
                    date={'march - Jun 2021'}
                    description={'Developed, maintained and shipped production code for web system project. The client was the Department of Health of Costa Rica'}
                />
            </div>
        </div>
    </section>
  )
}

export default Experience