import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Diary from '../pages/Diary'
import Login from '../pages/Login'
import NotFound from '../components/NotFound'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Diario" element={<Diary />} />
        <Route path="/Login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
