import React from 'react'

export const Settings = (props) => {
  const { user } = props
  const styles = getStyles()

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Settings</h1>
      <p>Phone: {user && user.phoneNumber}</p>
    </div>
  )
}

const getStyles = () => ({
  container: {},
  title: {},
})
