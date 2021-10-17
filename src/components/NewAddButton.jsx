import React from 'react'

const NewAddButton = (props) => {
  return (
    <button className="New-Add-Btn">
      + {props.name}
    </button>
  )
}

export { NewAddButton }