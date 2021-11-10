import React from 'react'
import Header from '@components/Header'
import { TitleAndParagraph } from '@components/TitleAndParagraph'
import { FormAndBtn_Venta } from '@containers/FormAndBtn_Venta'

const EditVenta = () => {
  return (
    <>
      <Header />
      <TitleAndParagraph title="Editar venta" paragraph="Texto" />
      <FormAndBtn_Venta />
    </>
  )
}

export { EditVenta }