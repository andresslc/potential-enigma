import React from 'react'

const DeleteButton = (props) => {
  return (
    <button className="RedButton">
      {props.name}
    </button>
  )
}

export { DeleteButton }