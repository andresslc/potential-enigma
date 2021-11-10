import React from 'react'
import Header from '@components/Header'
import { TitleAndSearch } from '@components/TitleAndSearch'
import { AV_Card } from '@components/AV_Card'

const AdminVentas = ({ventas}) => {
  
  return (
    <>
      <Header />
      <TitleAndSearch title="Administrador de Ventas" nameAddButton="Nueva Venta" paragraph="Texto" link="/nueva-venta"/>
      <main className="main-container-GU-AP-AV">
        {ventas.map((venta, value) => (
          <AV_Card
            fecha={venta.fecha}
            id_venta={venta.id_venta}
            _id={venta._id}
            estado={venta.estado}
            nombre={venta.nombre}
            cc={venta.cc}
            cantidad={venta.cantidad}
            vendedor={venta.vendedor}
            vlr_unitario={venta.vlr_unitario}
            vlr_total={venta.vlr_total}
          />
        ))}

      </main>
    </>
  )
}

export { AdminVentas }