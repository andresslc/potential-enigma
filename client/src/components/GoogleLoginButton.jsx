import React from 'react'
import { GoogleLogin } from 'react-google-login'
import GoogleLogo from '@logos/google.png'
import { refreshTokenSetup } from '@utils/refreshToken'
import axios from 'axios'

const clientId = '522023872785-36uq5lh4v58g53dpoljvvh2ud4mcgp11.apps.googleusercontent.com'

const GoogleLoginButton = () => {
  const onSuccess = (res) => {
    let googleDataLogin = res.profileObj

    console.log('Inicio de sesión exitoso, usuario:', googleDataLogin)
    axios.post('http://localhost:3003/nuevo-usuario', googleDataLogin)
      .then(res => {
        console.log('Usuario registrado:', googleDataLogin)
      })
      .catch(err => {
        console.log(`Error al registrar usuario: ${err} `)
      })
    
    refreshTokenSetup(res)
  }

  const onFailure = (res) => {
    console.log('Inicio de sesión fallido, respuesta:', res)
  }

  return (
    <GoogleLogin
      clientId={clientId}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}><a href="*"><img src={GoogleLogo} alt="Google logo"/>INICIAR SESIÓN CON GOOGLE</a></button>
      )}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  )
}

export default GoogleLoginButton