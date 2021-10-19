import React from 'react'
import { GU_BtnState } from './GU_BtnState'
import configSettingsIcon from '@icons/config_settings.png'

const GU_Card = () => {
  return (
    <div className="Card-Container">
        <div className="Left">
          <ul>
            <li>
              <h6>ID: </h6> <p>007</p>
            </li>
            <li>
              <h6>Nombre: </h6> <p>Edwin</p>
            </li>
            <li>
              <h6>Apellido: </h6> <p>Jorge</p>
            </li>
            <li>
              <h6>Rol: </h6> <p>Admin</p>
            </li>
          </ul>
        </div>
        <div className="Right">
          <GU_BtnState name="Pendiente"/>
          <a href="/editar-usuario"><img src={configSettingsIcon} alt="Icono de ajustes"/></a>
        </div>
    </div>
  )
}

// Gestión de usuarios Card
export { GU_Card }