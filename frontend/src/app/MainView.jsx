import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function MainView () {
  const [logedIn, setLogedIn] = useState(false)

  return (
    <div >
        {
          logedIn ? <h1>MainView</h1> : <Navigate to="/signin" />
        }

    </div>
  )
}

export default MainView
