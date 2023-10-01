import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Diary from "../pages/Diary";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";

const AppRoutes = (User) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute User={User} />}>
          <Route path="/Diario" element={<Diary />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
