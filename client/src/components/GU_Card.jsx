import React from 'react'
import { GU_BtnState } from './GU_BtnState'
import configSettingsIcon from '@icons/config_settings.png'

const GU_Card = (props) => {
  return (
    <div className="Card-Container">
        <div className="Left">
          <ul>
            {/* <li>
              <h6>Fecha: </h6> <p>{props.fecha}</p>
            </li> */}
            <li>
              <h6>ID: </h6> <p>{props._id}</p>
            </li>
            <li>
              <h6>Nombre: </h6> <p>{props.nombre}</p>
            </li>
            <li>
              <h6>Apellido: </h6> <p>{props.apellido}</p>
            </li>
            <li>
            <h6>Rol: </h6> <p>{props.rol}</p>
            </li>
          </ul>
        </div>
        <div className="Right">
          <GU_BtnState name={props.estado}/>
          <a href={"/editar-usuario/" + props._id}><img src={configSettingsIcon} alt="Icono de ajustes"/></a>
        </div>
    </div>
  )
}

// Gestión de usuarios Card
export { GU_Card }