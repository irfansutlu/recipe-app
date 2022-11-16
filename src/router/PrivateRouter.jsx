import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function PrivateRouter() {
  const userInfo = sessionStorage.getItem("user") 
  return (
    <div>
      {userInfo ? <Outlet/> : <Navigate to="/login"/> }
    </div>
  )
}

export default PrivateRouter