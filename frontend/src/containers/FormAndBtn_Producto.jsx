import React, { useRef } from 'react'
import { CancelButton } from '@components/CancelButton'
import { SaveButton } from '@components/SaveButton'
import axios from 'axios'

const FormAndBtn_Producto = () => {
  const form = useRef(null)
  const fecha = Date()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      fecha,
      _id: formData.get('id'),
      nombre: formData.get('nombre'),
      estado: formData.get('estado'),
      vlr_unitario: formData.get('vlr_unitario'),
      desc: formData.get('desc'),
    }
    console.log(data)
    axios.post('http://localhost:3003/nuevo-producto', data)
      .then(res => {
        console.log(`Exito: ${data}`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form action="/" ref={form}>
      <div className="main-container-GU-AP-AV">
        <div className='form-input'>
          <label htmlFor='id'><h6>ID</h6></label>
          <input type='number' name='id' placeholder='ID' disabled className='form-input-size' required />
        </div>

        <div className='form-input'>
          <label htmlFor='nombre'><h6>Nombre</h6></label>
          <input type='text' name='nombre' placeholder='Escribe aquí tu nombre...' className='form-input-size' required />
        </div>

        <div className='form-input'>
          <label htmlFor='desc'><h6>Descripción</h6></label>
          <input type='text' name='desc' placeholder='Escribe aquí la descripción...' className='form-input-size' required />
        </div>

        <div className='form-input'>
          <label htmlFor='vlr_unitario'><h6>Valor unitario</h6></label>
          <input type='number' name='vlr_unitario' placeholder='Escribe el valor unitario del producto...' className='form-input-size' required />
        </div>

        <div className='form-input'>
          <label htmlFor='estado'><h6>Estado</h6></label>
          <select name='estado' className='form-input-size form-input-select' defaultValue={'DEFAULT'} required>
            <option disabled value='DEFAULT'>Elige el estado del producto</option>
            <option value='Disponible'>Disponible</option>
            <option value='No disponible'>No disponible</option>
          </select>
        </div>
        
        <div className="CancelAndSaveButtons-Container">
          <CancelButton name="Cancelar"/>
          <SaveButton name="Guardar" onClick={handleSubmit}/>
        </div>
      </div>
    </form>
  )
}

export { FormAndBtn_Producto }