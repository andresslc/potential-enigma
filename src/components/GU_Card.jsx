import React from 'react'
import { BtnState } from './BtnState'
import configSettingsIcon from '@icons/config_settings.png'

const GU_Card = () => {
  return (
    <div className="GU-Card-Container">
        <div className="GU-Left">
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
        <div className="GU-Right">
          <BtnState name="Pendiente"/>
          <img src={configSettingsIcon} alt="Icono de ajustes" />
        </div>
    </div>
  )
}

// Gestión de usuarios Card
export { GU_Card }