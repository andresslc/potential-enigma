import React from 'react'
import '@styles/main.scss'
import menu_icon from '@icons/POTENTIAL_ENIGMA_ICON.png'

const Header = () => {
  return (
    <header>
      <div>
        <img className="logo-iniciales" src={menu_icon} alt="POTENTIAL ENIGMA ICON"/>
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li><a href="/gestion-usuarios">Gestión de usuarios</a></li>
            <li><a href="/admin-productos">Administrador de productos</a></li>
            <li><a href="/admin-ventas">Administrador de ventas</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header