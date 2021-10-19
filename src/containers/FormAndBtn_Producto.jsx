import React from 'react'
import { CancelButton } from '@components/CancelButton'
import { SaveButton } from '@components/SaveButton'

const FormAndBtn_Producto = () => {
  return (
    <form action="/">
      <div className='form-input'>
        <label id='id-label'><h6>ID</h6></label>
        <input type='number' id='id' placeholder='Escribe aquí tu ID...' className='form-input-size' required />
      </div>
      <div className='form-input'>
        <label id='nombre-label'><h6>Nombre</h6></label>
        <input type='text' id='nombre' placeholder='Escribe aquí tu nombre...' className='form-input-size' required />
      </div>
      <div className='form-input'>
        <label id='descripcion-label'><h6>Descripción</h6></label>
        <input type='text' id='apellido' placeholder='Escribe el valor unitario del producto...' className='form-input-size' required />
      </div>
      <div className='form-input'>
        <label id='valor_unitario-label'><h6>Valor unitario</h6></label>
        <input type='text' id='apellido' placeholder='Escribe el valor unitario del producto...' className='form-input-size' required />
      </div>
      <div className='form-input'>
        <h6 id='estado-label'>Estado</h6>
        <select id='dropdown' className='form-input-size form-input-select' required>
          <option disabled selected value>Pendiente</option>
          <option value='Autorizado'>Autorizado</option>
          <option value='No autorizado'>No autorizado</option>
        </select>
      </div>
      <div className="CancelAndSaveButtons-Container">
        <CancelButton name="Cancelar"/>
        <SaveButton name="Guardar"/>
      </div>
    </form>
  )
}

export { FormAndBtn_Producto }