import React from 'react'
import { NewAddButton } from './NewAddButton'
import { SSButton } from './SSButton'
import IconoBusqueda from '@icons/design_search-outlined.png'

const TitleAndSearch = (props) => {
  return (
    <section className="TitleAndSearch-container">
      <div className="Title-container">
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </div>
      <div className="Search-container">
        <div className="SearchInput-container">
          <img src={IconoBusqueda} className="Search-icon" alt="icono de busqueda"/>
          <input type="search" id="searchBar" name="searchBar" placeholder="Escribe aquí tu búsqueda..." />
        </div>
        <div className="Btns-container">
          <NewAddButton name={props.nameAddButton}/>
          <SSButton name="Buscar"/>
        </div>
      </div>
    </section>
  )
}

export { TitleAndSearch }