import React, { useState, useEffect } from 'react'
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
import axios from 'axios'
import '@styles/main.css'

const App = () => {
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3003/usuarios')
      .then(res => setUsuarios(res.data.usuarios))
      .catch(error => console.log(error))
  }, [])

  const [ventas, setVenta] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3003/ventas')
      .then(res => setVenta(res.data.ventas))
      .catch(error => console.log(error))
  }, [])

  const [productos, setProductos] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3003/productos')
      .then(res => setProductos(res.data.productos))
      .catch(error => console.log(error))
  }, [])


  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/gestion-usuarios" render={() => <GestionUsuarios usuarios={usuarios} /> } />
          <Route exact path={"/editar-usuario/:usuarioId"} component={EditUser} />

          <Route exact path="/admin-productos" render={() => <AdminProductos productos={productos} />} />
          <Route exact path="/nuevo-producto" component={NuevoProducto} />
          <Route exact path="/editar-producto" component={EditProduct} />

          <Route exact path="/admin-ventas" render={() => <AdminVentas ventas={ventas}/> } />
          <Route exact path="/nueva-venta" component={NuevaVenta} />
          <Route exact path="/editar-venta" component={EditVenta} />
          
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>

  )
}

export default App
