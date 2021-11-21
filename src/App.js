import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Welcome to Space Race</h2>
        <Routes>
          <Route exact path="/" component={() => <p>See README for details</p>} />
          <Route component={() => <p>404: Navigate to Root</p>} />
        </Routes>
      </div>
    )
  }
}
export default App
