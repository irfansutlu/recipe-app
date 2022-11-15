import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function PrivateRouter() {
  const user = true
  return (
    <div>
      {user ? <Outlet/> : <Navigate to="/login"/> }
    </div>
  )
}

export default PrivateRouter