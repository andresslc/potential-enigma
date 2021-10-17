import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import '@styles/main.scss'
import { GestionUsuarios } from '@pages/GestionUsuarios'
import { AdminProductos } from '@pages/AdminProductos'
import { AdminVentas } from '@pages/AdminVentas'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/gestion-usuarios" component={GestionUsuarios} />
          <Route exact path="/admin-productos" component={AdminProductos} />
          <Route exact path="/admin-ventas" component={AdminVentas} />
          <Route path="*" component={NotFound} />
          // la otra ruta va aquí
        
        </Switch>
      </Layout>
    </BrowserRouter>

  )
}

export default App
