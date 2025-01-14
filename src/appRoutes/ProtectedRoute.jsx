import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export default function ProtectedRoute() {
  const { user } = useContext(UserContext);

  if (!user || user.id == null) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
