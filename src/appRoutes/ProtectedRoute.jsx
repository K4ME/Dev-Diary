import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useUserStore from '../store/index'

export default function ProtectedRoute() {
  const { user } = useUserStore()
  const signed = user.id ? true : false

  if (!signed) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
