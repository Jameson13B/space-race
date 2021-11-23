import React, { useEffect, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import { auth } from './firebase'

import { Home } from './views/Home'
import { Login } from './views/Login'
import { Settings } from './views/Settings'
import { Level } from './views/Level'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      currentUser && setUser(currentUser)
    })
  })

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to Space Race</h2>
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route path="/settings" element={<Settings user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} user={user} />} />
        <Route path="/level/:id" element={<Level user={user} />} />
        {/* If path doesn't match a speecific path, show error with link to Home */}
        <Route
          path="*"
          replace={true}
          element={
            <div>
              <p>404: Path not found</p>
              <Link to="/">Go to Home</Link>
            </div>
          }
        />
      </Routes>
    </div>
  )
}
export default App
