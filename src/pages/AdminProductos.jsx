import React from 'react'
import Header from '@components/Header'
import { TitleAndSearch } from '@components/TitleAndSearch'

const AdminProductos = () => {
  return (
    <>
      <Header />
      <TitleAndSearch title="Administrador de Productos" nameAddButton="Nuevo Producto"/>
      <main className="main-container-GU-AP-AV">
        
      </main>
    </>
  )
}

export { AdminProductos }