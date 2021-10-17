import React from 'react'
import Header from '@components/Header'
import { TitleAndSearch } from '@components/TitleAndSearch'

const AdminVentas = () => {
  return (
    <>
      <Header />
      <TitleAndSearch title="Administrador de Ventas" nameAddButton="Nueva Venta" />
      <main className="main-container-GU-AP-AV">
        
      </main>
    </>
  )
}

export { AdminVentas }