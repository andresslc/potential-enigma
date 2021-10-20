import React, { useRef, useState } from 'react'
import { CancelButton } from '@components/CancelButton'
import { SaveButton } from '@components/SaveButton'

const FormAndBtn_EditarUsuario = () => {
  const form = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      id: formData.get('id'),
      nombre: formData.get('nombre'),
      apellido: formData.get('apellido'),
      estado: formData.get('estado'),
      rol: formData.get('rol'),
    }
    console.log(data)
  }

  return (
    <form action="/" ref={form}>
      
      <div className='form-input'>
        <label htmlFor='id'><h6>ID</h6></label>
        <input type='number' name='id' placeholder='ID del usuario...' className='form-input-size' required />
      </div>

      <div className='form-input'>
        <label htmlFor='nombre'><h6>Nombre</h6></label>
        <input type='text' name='nombre' placeholder='Escribe aquí tu nombre...' className='form-input-size' required />
      </div>

      <div className='form-input'>
        <label htmlFor='apellido'><h6>Apellido</h6></label>
        <input type='text' name='apellido' placeholder='Escribe aquí el apellido...' className='form-input-size' required />
      </div>

      <div className='form-input'>
        <label htmlFor='estado'><h6>Estado</h6></label>
        <select name='estado' className='form-input-size form-input-select' defaultValue={'DEFAULT'} required>
          <option disabled value='DEFAULT' selected >Elige el estado de tu usuario</option>
          <option value='Pendiente'>Pendiente</option>
          <option value='Autorizado'>Autorizado</option>
          <option value='No autorizado'>No autorizado</option>
        </select>
      </div>

      <div className='form-input'>
        <label htmlFor='rol'><h6>Rol</h6></label>
        <select name='rol' className='form-input-size form-input-select' defaultValue={'DEFAULT'} required>
          <option disabled value={'DEFAULT'}>Elige el rol para el usuario</option>
          <option value='Usuario'>Usuario</option>
          <option value='Administrador'>Administrador</option>
          <option value='Vendedor'>Vendedor</option>
        </select>
      </div>
      
      <div className="CancelAndSaveButtons-Container">
        <CancelButton name="Cancelar"/>
        <SaveButton name="Guardar" onClick={handleSubmit}/>
      </div>
    </form>
  )
}

export { FormAndBtn_EditarUsuario }