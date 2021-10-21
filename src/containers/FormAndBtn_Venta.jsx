import React, { useRef } from 'react'
import { CancelButton } from '@components/CancelButton'
import { SaveButton } from '@components/SaveButton'
import axios from 'axios'

const FormAndBtn_Venta = () => {
  const form = useRef(null)
  const fecha = Date()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      fecha,
      id_venta: formData.get('id_venta'),
      _id: formData.get('id'),
      estado: formData.get('estado'),
      nombre: formData.get('nombre'),
      cc: formData.get('cc'),
      cantidad: formData.get('cantidad'),
      vendedor: formData.get('vendedor'),
      vlr_unitario: formData.get('vlr_unitario'),
      vlr_total: formData.get('vlr_total'),
    }
    console.log(data)
    axios.post('http://localhost:3003/nueva-venta', data)
      .then(res => {
        console.log(`Exito: ${data}`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form action="/" ref={form}>
      
      <div className='form-input'>
        <label htmlFor='id_venta'><h6>ID de venta</h6></label>
        <input type='number' name='id_venta' placeholder='Escribe aquí tu ID...' className='form-input-size' required />
      </div>
      
      <div className='form-input'>
        <label htmlFor='id'><h6>ID</h6></label>
        <input type='number' name='id' placeholder='ID' disabled className='form-input-size' required />
      </div>

      <div className='form-input'>
        <label htmlFor='estado'><h6>Estado</h6></label>
        <select name='estado' className='form-input-size form-input-select' defaultValue={'DEFAULT'} required>
          <option disabled value='DEFAULT'>Elige el estado de la venta</option>
          <option value='Entregada'>Entregada</option>
          <option value='En proceso'>En proceso</option>
          <option value='Cancelada'>Cancelada</option>
        </select>
      </div>

      <div className='form-input'>
        <label htmlFor='nombre'><h6>Nombre</h6></label>
        <input type='text' name='nombre' placeholder='Escribe aquí tu nombre...' className='form-input-size' required />
      </div>

      <div className='form-input'>
        <label htmlFor='cc'><h6>Cédula de ciudadanía</h6></label>
        <input type='number' name='cc' placeholder='Escribe la identificación personal...' className='form-input-size' required />
      </div>

      <div className='form-input'>
        <label htmlFor='cantidad'><h6>Cantidad</h6></label>
        <input type='number' name='cantidad' placeholder='Escribe el valor unitario del producto...' className='form-input-size' required />
      </div>
      
      <div className='form-input'>
        <label htmlFor='vendedor'><h6>Vendedor</h6></label>
        <select name='vendedor' className='form-input-size form-input-select' defaultValue={'DEFAULT'} required>
          <option disabled value='DEFAULT'>Elige el nombre del vendedor</option>
          <option value='Nombre 1'>Nombre 1</option>
          <option value='Nombre 2'>Nombre 2</option>
        </select>
      </div>

      <div className='form-input'>
        <label htmlFor='vlr_unitario'><h6>Valor unitario</h6></label>
        <input type='number' name='vlr_unitario' placeholder='Escribe el valor unitario del producto...' className='form-input-size' required />
      </div>

      <div className='form-input'>
        <label htmlFor='vlr_total'><h6>Valor total</h6></label>
        <input type='number' name='vlr_total' placeholder='Valor total...' className='form-input-size' required />
      </div>
      
      <div className="CancelAndSaveButtons-Container">
        <CancelButton name="Cancelar"/>
        <SaveButton name="Guardar" onClick={handleSubmit}/>
      </div>
    </form>
  )
}

export { FormAndBtn_Venta }