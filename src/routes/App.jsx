import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Login from '@containers/Login'
import NotFound from '@pages/NotFound'
import '@styles/main.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="*" component={NotFound} />
          // la otra ruta va aquí
        
        </Switch>
      </Layout>
    </BrowserRouter>

  )
}

export default App
