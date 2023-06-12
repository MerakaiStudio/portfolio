import React from 'react'

import '@styles/labels/ListLabel.scss'

const ListLabel = ({ name, key, icon }) => {
  return (
      <li className='list-label' key={key}>
          <img src={icon} alt={`${name} icon`} />
          {name}
      </li>
  )
}

export default ListLabel