import React from 'react'
import { AP_BtnState } from '@components/AP_BtnState'
import configSettingsIcon from '@icons/config_settings.png'

const AP_Card = (props) => {
  return (
    <div className="Card-Container">
      <div className="Left">
        <ul>
          <li>
            <h6>Fecha: </h6> <p>{props.fecha}</p>
          </li>
          <li>
            <h6>ID: </h6> <p>{props._id}</p>
          </li>
          <li>
            <h6>Nombre: </h6> <p>{props.nombre}</p>
          </li>
          <li>
            <h6>Descripción: </h6> <p>{props.desc}</p>
          </li>
          <li>
            <h6>Valor unitario:</h6> <p>$ {props.vlr_unitario}</p>
          </li>
        </ul>
      </div>
      <div className="Right">
        <AP_BtnState name={props.estado}/>
          <a href="/editar-producto"><img src={configSettingsIcon} alt="Icono de ajustes"/></a>
      </div>
    </div>
  )
}

export { AP_Card }