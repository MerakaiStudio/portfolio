import React from 'react'

import '@styles/labels/ImageLabel.scss'


const ImageLabel = ({ image, title, subtitle, description, children }) => {
  return (
    <div className='image-label'>
        <div className='image-label-text'>
            <div className='image-label-text-content'>
              <img src={image} alt="" />
              <h2>{title ? title : 'Title'}</h2>
              <span>{subtitle ? subtitle : 'Is just a little title'}</span>
              <hr />
            </div>
            <div className='skills-label'>
              <h4>{description}</h4>
              <p>
                {children}
              </p>
            </div>
        </div>
    </div>
  )
}

export default ImageLabel