import React from 'react'
import Header from '@components/Header'
import { TitleAndSearch } from '@components/TitleAndSearch'
import { AP_Card } from '@components/AP_Card'

const AdminProductos = () => {
  return (
    <>
      <Header />
      <TitleAndSearch title="Administrador de Productos" nameAddButton="Nuevo Producto" paragraph="Texto" link="/nuevo-producto"/>
      <main className="main-container-GU-AP-AV">
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
        <AP_Card />
      </main>
    </>
  )
}

export { AdminProductos }