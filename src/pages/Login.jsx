import React from 'react'
import Logo from '@logos/POTENTIAL_ENIGMA.png'
import Header from '@components/Header'
import Footer from '@components/Footer'
import GoogleLoginButton from '@components/GoogleLoginButton'
import GoogleLogOutButton from '@components/GoogleLogOutButton'

const Login = () => {
  return (
    <>
      <Header />
      <main className="home">
        <section className="logo-container">
          <img className="logo" src={Logo} alt="POTENTIAL ENIGMA"/>
        </section>

        <section className="container">
          <div className="login-container">
            <div className="login">
              <h2>Bienvenid@ 👋</h2>
              <h5>¿Qué deseas hacer?</h5>
              <h6>Iniciar sesión</h6>
              {/* <button><a href="*"><img src={GoogleLogo} alt="Google logo"/>INICIAR SESIÓN CON GOOGLE</a></button> */}
              <GoogleLoginButton />
              {/* <GoogleLogOutButton /> */}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Login