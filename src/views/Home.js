import React from 'react'

import { auth } from '../firebase'

export const Home = (props) => {
  const { user } = props
  const styles = getStyles()

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Home</h1>
      <p>Phone: {user && user.phoneNumber}</p>
      {user && <button onClick={() => auth.signOut()}>Logout</button>}
    </div>
  )
}

const getStyles = () => ({
  container: {},
  title: {},
})
