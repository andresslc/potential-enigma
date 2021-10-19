import React from 'react'
import { AV_BtnState } from '@components/AV_BtnState'
import configSettingsIcon from '@icons/config_settings.png'

const AV_Card = () => {
  return (
    <div className="AV_Card-Container">
      <div className="AV_Card-Left">
        <ul>
          <li>
            <h6>ID Venta: </h6> <p>0001</p>
          </li>
          <li>
            <h6>ID: </h6> <p>007</p>
          </li>
          <li>
            <h6>Nombre: </h6> <p>Edwin</p>
          </li>
          <li>
            <h6>C.C: </h6> <p>----</p>
          </li>
          <li>
            <h6>Cantidad:</h6>$ --<p></p>
          </li>
          <li>
            <h6>Valor unitario:</h6>$ --<p></p>
          </li>
          <li>
            <h6>Valor total:</h6>$ --<p></p>
          </li>
          <li>
            <h6>Vendedor:</h6>$ --<p></p>
          </li>
        </ul>
      </div>
      <div className="AV_Card-Right">
        <AV_BtnState name="Entregada"/>
        <a href="/editar-venta"><img src={configSettingsIcon} alt="Icono de ajustes" /></a>
      </div>
    </div>
  )
}

export { AV_Card }