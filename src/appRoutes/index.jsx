import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'
import Diary from '../pages/Diary'
import Login from '../pages/Login'
import NotFound from '../components/NotFound'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/Diario" element={<Diary />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
