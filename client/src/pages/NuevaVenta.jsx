import React from 'react'
import Header from '@components/Header'
import { TitleAndParagraph } from '@components/TitleAndParagraph'
import { FormAndBtn_Venta } from '@containers/FormAndBtn_Venta'

const NuevaVenta = () => {
  return (
    <>
      <Header />
      <TitleAndParagraph title="Nueva venta" paragraph="Texto" />
      <FormAndBtn_Venta />
    </>
  )
}

export { NuevaVenta }