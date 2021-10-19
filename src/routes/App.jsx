import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import { GestionUsuarios } from '@pages/GestionUsuarios'
import { AdminProductos } from '@pages/AdminProductos'
import { AdminVentas } from '@pages/AdminVentas'
import { EditUser } from '@pages/EditUser'
import { NuevoProducto } from '@pages/NuevoProducto'
import { EditProduct } from '@pages/EditProduct'
import { NuevaVenta } from '@pages/NuevaVenta'
import { EditVenta } from '@pages/EditVenta'
import '@styles/main.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/gestion-usuarios" component={GestionUsuarios} />
          <Route exact path="/editar-usuario" component={EditUser} />

          <Route exact path="/admin-productos" component={AdminProductos} />
          <Route exact path="/nuevo-producto" component={NuevoProducto} />
          <Route exact path="/editar-producto" component={EditProduct} />

          <Route exact path="/admin-ventas" component={AdminVentas} />
          <Route exact path="/nueva-venta" component={NuevaVenta} />
          <Route exact path="/editar-venta" component={EditVenta} />
          
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>

  )
}

export default App
