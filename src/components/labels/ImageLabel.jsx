import React from 'react'

import '@styles/labels/ImageLabel.scss'


const ImageLabel = ({ image, title, subtitle, description, children }) => {
  return (
    <div className='image-label'>
        <img src={image} alt="" />
        <div className='image-label-text'>
            <div className='image-label-text-content'>
              <h2>{title ? title : 'Title'}</h2>
              <span>{subtitle ? subtitle : 'Is just a little title'}</span>
              <hr />
            </div>
            <div className='skills-label'>
              <h4>{description}</h4>
              <ul>
                {children}
              </ul>
            </div>
        </div>
    </div>
  )
}

export default ImageLabel