import React from 'react'

import '@styles/labels/ListLabel.scss'

const ListLabel = ({ name, key, icon }) => {
  return (
      <span className='list-label' key={key}>
          <img src={icon} alt={`${name} icon`} />
          {name}
      </span>
  )
}

export default ListLabel