import React from 'react'

import '@styles/labels/JobPosition.scss'

const JobPosition = ({title, company, description, date}) => {
  return (
    <>
        <div className='job-position-grid'>      
            <div className='job-position-date-grid'>
                <span>
                    {date}
                </span>
            </div>       
            <div className='job-position-text-grid'>
                <h4>{title}</h4>
                {company ? 
                    <span>{company}</span>
                    : null
                }
                <p>
                    {description}
                </p>
            </div>   
        </div>
        <hr className='hr-grid' />
    </>
  )
}

export default JobPosition