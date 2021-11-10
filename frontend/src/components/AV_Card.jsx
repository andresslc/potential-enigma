import React from 'react'
import { AV_BtnState } from '@components/AV_BtnState'
import configSettingsIcon from '@icons/config_settings.png'

const AV_Card = (props) => {
  return (
    <div className="AV_Card-Container">
      <div className="Left">
        <ul>
          <li>
            <h6>Fecha: </h6> <p>{props.fecha}</p>
          </li>
          <li>
            <h6>ID Venta: </h6> <p>{props.id_venta}</p>
          </li>
          <li>
            <h6>ID: </h6> <p>{props._id}</p>
          </li>
          <li>
            <h6>Nombre: </h6> <p>{props.nombre}</p>
          </li>
          <li>
            <h6>C.C: </h6> <p>{props.cc}</p>
          </li>
          <li>
            <h6>Cantidad:</h6>{props.cantidad}<p></p>
          </li>
          <li>
            <h6>Vendedor:</h6>{props.vendedor}<p></p>
          </li>
          <li>
            <h6>Valor unitario:</h6>{props.vlr_unitario}<p></p>
          </li>
          <li>
            <h6>Valor total:</h6>{props.vlr_total}<p></p>
          </li>
          
        </ul>
      </div>
      <div className="Right">
        <AV_BtnState name={props.estado}/>
        <a href="/editar-venta"><img src={configSettingsIcon} alt="Icono de ajustes" /></a>
      </div>
    </div>
  )
}

export { AV_Card }