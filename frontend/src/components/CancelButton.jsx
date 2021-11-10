import React from 'react'

const CancelButton = (props) => {
  return (
    <button className="RedButton">
      {props.name}
    </button>
  )
}

export { CancelButton }