import React, { useRef, useState, useEffect } from 'react'
import { CancelButton } from '@components/CancelButton'
import { SaveButton } from '@components/SaveButton'
import { useParams } from 'react-router-dom'
import "@styles/main.css"
import axios from 'axios'

const FormAndBtn_EditarUsuario = () => {
  const [usuario, setUsuario] = useState({})
  const modificarEstado = (e) => {
    e.preventDefault()
    setUsuario({...usuario, estado: e.target.value})
  }

  const modificarRol = (e) => {
    e.preventDefault()
    setUsuario({...usuario, rol: e.target.value})
  }
  let { usuarioId } = useParams()

  const form = useRef(null)

  useEffect(() => {
  axios
    .get(`http://localhost:3003/editar-usuario/${usuarioId}`)
    .then(res => {
      setUsuario(res.data.usuario)

    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      _id: usuarioId,
      estado: usuario.estado,
      rol: usuario.rol
    }
      
    axios.put(`http://localhost:3003/editar-usuario/${usuarioId}`, data)
      .then(res => {
        console.log(res)
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
          <input type='number' name='id' placeholder={usuario._id} disabled className='form-input-size' required />
        </div>

        <div className='form-input'>
          <label htmlFor='nombre'><h6>Nombre</h6></label>
          <input type='text' name='nombre' placeholder={usuario.nombre} disabled className='form-input-size' required />
        </div>

        <div className='form-input'>
          <label htmlFor='apellido'><h6>Apellido</h6></label>
          <input type='text' name='apellido' placeholder={usuario.apellido} disabled className='form-input-size' required />
        </div>

        <div className='form-input'>
          <label htmlFor='estado'><h6>Estado</h6></label>
          <select name='estado' className='form-input-size form-input-select' onChange={modificarEstado} defaultValue={'DEFAULT'} required>
            <option disabled value='DEFAULT' selected >Elige el estado de tu usuario</option>
            <option value='Pendiente'>Pendiente</option>
            <option value='Autorizado'>Autorizado</option>
            <option value='No autorizado'>No autorizado</option>
          </select>
        </div>

        <div className='form-input'>
          <label htmlFor='rol'><h6>Rol</h6></label>
          <select name='rol' className='form-input-size form-input-select' onChange={modificarRol} defaultValue={'DEFAULT'} required>
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
      </div>
    </form>
    
  )
}

export { FormAndBtn_EditarUsuario }