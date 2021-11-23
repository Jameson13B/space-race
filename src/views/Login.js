import React from 'react'

import { launchAuth } from '../firebase'

export const Login = (props) => {
  const { onLogout, user } = props
  const styles = getStyles()

  const handleLogin = () => launchAuth('#firebaseui-auth-container')

  return (
    <div style={styles.container}>
      {user ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login/Register</button>
      )}

      <div id="firebaseui-auth-container" />
    </div>
  )
}

const getStyles = () => ({
  container: {},
  title: {},
})
