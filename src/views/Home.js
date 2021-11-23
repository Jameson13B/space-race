import React from 'react'

export const Home = (props) => {
  const { onLogout, user } = props
  const styles = getStyles()

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Home</h1>
      <p>Phone: {user && user.phoneNumber}</p>
      {user && <button onClick={onLogout}>Logout</button>}
    </div>
  )
}

const getStyles = () => ({
  container: {},
  title: {},
})
