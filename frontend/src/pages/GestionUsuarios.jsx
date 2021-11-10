import React from 'react'
import Header from '@components/Header'
import { TitleAndSearch } from '@components/TitleAndSearch'
import { GU_Card } from '@components/GU_Card'
import '@styles/main.css'

const GestionUsuarios = ({usuarios}) => {
  return (
    <>
      <Header />
      <TitleAndSearch title="Gestión de Usuarios" nameAddButton="Nuevo Usuario" paragraph="Texto"/>
      <main className="main-container-GU-AP-AV">
        {usuarios.map((usuario, value) => (
          <GU_Card
            // fecha={usuario.fecha}
            _id={usuario._id}
            nombre={usuario.nombre}
            apellido={usuario.apellido}
            rol={usuario.rol}
            estado={usuario.estado}
          />
        ))}

      </main>
    </>
  )
}

export { GestionUsuarios }