import React from 'react'
import Header from '@components/Header'
import { TitleAndParagraph } from '@components/TitleAndParagraph'
import { FormAndBtn_EditarUsuario } from '@containers/FormAndBtn_EditarUsuario'

const EditUser = () => {
  return (
    <>
      <Header />
      <TitleAndParagraph title="Editar usuario" paragraph="Aquí puedes crear tu usuario (administrador y vendedor)
      y asignarle un estado (pendiente/autorizado/no autorizado)."/>
      <FormAndBtn_EditarUsuario />
    </>
  )
}

export { EditUser }