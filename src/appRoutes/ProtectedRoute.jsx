import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../store";

export default function ProtectedRoute() {
  const user = useUserStore((state) => state.user);

  console.log(user);
  const signed = user.id ? true : false;

  if (!signed) return <Navigate to="/login" />;

  return <Outlet />;
}
