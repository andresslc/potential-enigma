import React from 'react'

const SaveButton = (props) => {
  return (
    <button className="SaveButton" onClick={props.onClick}>
      {props.name}
    </button>
  )
}

export { SaveButton }