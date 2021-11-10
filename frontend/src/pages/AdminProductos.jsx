import React from 'react'
import Header from '@components/Header'
import { TitleAndSearch } from '@components/TitleAndSearch'
import { AP_Card } from '@components/AP_Card'

const AdminProductos = ({productos}) => {
  return (
    <>
      <Header />
      <TitleAndSearch title="Administrador de Productos" nameAddButton="Nuevo Producto" paragraph="Texto" link="/nuevo-producto"/>
      <main className="main-container-GU-AP-AV">
        {productos.map((producto, value) => (
          <AP_Card
            fecha={producto.fecha}
            _id={producto._id}
            nombre={producto.nombre}
            desc={producto.desc}
            estado={producto.estado}
            vlr_unitario={producto.vlr_unitario}
          />
        ))}
      </main>
    </>
  )
}

export { AdminProductos }