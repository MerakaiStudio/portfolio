import React from 'react'

import '@styles/tags/TagLenguage.scss'

const TagLenguage = ({ title }) => {
  return (
    <span className='tag-lenguage'>{title ? title : 'Tag'}</span>
  )
}

export default TagLenguage