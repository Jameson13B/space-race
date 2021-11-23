import React from 'react'

import { auth, launchAuth } from '../firebase'

export const Login = (props) => {
  const { setUser, user } = props
  const styles = getStyles()

  const handleLogin = () => launchAuth('#firebaseui-auth-container')
  const handleLogout = () => {
    setUser(null)
    auth.signOut()
  }

  return (
    <div style={styles.container}>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
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
