import React from 'react'
import { AP_BtnState } from '@components/AP_BtnState'
import configSettingsIcon from '@icons/config_settings.png'

const AP_Card = () => {
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
            <h6>Descripción: </h6> <p>Jorge</p>
          </li>
          <li>
            <h6>Valor unitario:</h6>$ --<p></p>
          </li>
        </ul>
      </div>
      <div className="Right">
        <AP_BtnState name="Disponible"/>
          <a href="/editar-producto"><img src={configSettingsIcon} alt="Icono de ajustes"/></a>
      </div>
    </div>
  )
}

export { AP_Card }