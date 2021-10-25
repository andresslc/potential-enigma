import React from 'react'

const NewAddButton = (props) => {
  return (
    <a href={props.link}>
      <button className="New-Add-Btn">
      + {props.name}
      </button>
    </a>
  )
}

export { NewAddButton }