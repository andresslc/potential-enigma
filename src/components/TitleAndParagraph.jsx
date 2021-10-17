import React from 'react'

const TitleAndParagraph = () => {
  return (
    <section className="TitleAndSearch-container">
      <div className="Title-container">
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </div>
    </section>
  )
}

export { TitleAndParagraph }