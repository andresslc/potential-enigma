import React from 'react'
import Header from '@components/Header'
import { TitleAndSearch } from '@components/TitleAndSearch'
import { GU_Card } from '@components/GU_Card'

const GestionUsuarios = () => {
  return (
    <>
      <Header />
      <TitleAndSearch title="Gestión de Usuarios" nameAddButton="Nuevo Usuario" paragraph="Texto"/>
      <main className="main-container-GU-AP-AV">
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />
        <GU_Card />

      </main>
    </>
  )
}

export { GestionUsuarios }