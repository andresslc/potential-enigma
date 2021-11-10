import React from 'react'
import { GoogleLogin } from 'react-google-login'
import GoogleLogo from '@logos/google.png'

const clientId = '522023872785-36uq5lh4v58g53dpoljvvh2ud4mcgp11.apps.googleusercontent.com'

const GoogleLogOutButton = () => {
  const onSuccess = () => {
    console.log('Sesión cerrada exitosamente.')
  }

  return (
    <GoogleLogin
      clientId={clientId}
      render={renderProps => (
        <button className="GoogleLogOut-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}><a href="*"><img src={GoogleLogo} alt="Google logo"/>CERRAR SESIÓN</a></button>
      )}
      onLogoutSuccess={onSuccess}
    />
  )
}

export default GoogleLogOutButton