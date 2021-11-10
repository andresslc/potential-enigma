import React from 'react'
import Header from '@components/Header'
import { TitleAndParagraph } from '@components/TitleAndParagraph'
import { FormAndBtn_Producto } from '@containers/FormAndBtn_Producto'

const EditProduct = () => {
  return (
    <>
      <Header />
      <TitleAndParagraph title="Editar producto" paragraph="Texto"/>
      <FormAndBtn_Producto />
    </>
  )
}

export { EditProduct }