import React from 'react'

export const Level = (props) => {
  const { user } = props
  const styles = getStyles()

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Level</h1>
      <p>Phone: {user && user.phoneNumber}</p>
    </div>
  )
}

const getStyles = () => ({
  container: {},
  title: {},
})
