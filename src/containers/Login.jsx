import React from 'react'
import '../../sass/_login.scss'
import Header from '../components/Header'

const Login = () => {
  return (
    <>
      <Header />
      <main className="home">
        <section className="logo-container">
          <img className="logo" src="./assets/img/POTENTIAL ENIGMA.png" alt="POTENTIAL ENIGMA"/>
        </section>

        <section className="container">
          <div className="login-container">
            <div className="login">
              <h2>Bienvenid@ 👋</h2>
              <h5>¿Qué deseas hacer?</h5>
              <h6>Iniciar sesión</h6>
              <button><a href="./public/gestion_usuarios/gestion_usuarios.html"><img src="./assets/img/google.png" alt="Google logo"/>INICIAR SESIÓN CON GOOGLE</a></button>
              <div id="app">Button React</div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login