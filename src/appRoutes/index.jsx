import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Diary from "../Pages/Diary";
import Login from "../Pages/Login";
import NotFound from "../components/NotFound";
import Profile from "../Pages/Profile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Diary />} />

          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
