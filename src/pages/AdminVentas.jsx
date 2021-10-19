import React from 'react'
import Header from '@components/Header'
import { TitleAndSearch } from '@components/TitleAndSearch'
import { AV_Card } from '@components/AV_Card'

const AdminVentas = () => {
  return (
    <>
      <Header />
      <TitleAndSearch title="Administrador de Ventas" nameAddButton="Nueva Venta" paragraph="Texto" link="/nueva-venta"/>
      <main className="main-container-GU-AP-AV">
        <AV_Card />
        <AV_Card />
        <AV_Card />
        <AV_Card />
        <AV_Card />
        <AV_Card />
        <AV_Card />
        <AV_Card />
      </main>
    </>
  )
}

export { AdminVentas }