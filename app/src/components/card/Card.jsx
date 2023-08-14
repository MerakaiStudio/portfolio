import React from 'react'

import '@styles/cards/Card.scss'

const Card = ({ title, children}) => {
  return (
    <div className='about-card'>
          <div>
              <h3 className='about-card-title'>{title ? title : 'Titulo' }</h3>
              <div className='about-card-div'></div>
          </div>
        <div>
          {children}
        </div>
    </div>
  )
}

export default Card