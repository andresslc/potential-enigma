import React from 'react'
import Header from '@components/Header'
import { TitleAndParagraph } from '@components/TitleAndParagraph'
import { FormAndBtn_Producto } from '@containers/FormAndBtn_Producto'

const NuevoProducto = () => {
  return (
    <>
      <Header />
      <TitleAndParagraph title="Nuevo producto" paragraph="Texto"/>
      <FormAndBtn_Producto />
    </>
  )
}

export { NuevoProducto }