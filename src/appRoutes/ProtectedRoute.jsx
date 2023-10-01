import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(User) {
  //const user = useUserStore((state) => state.user);
  const signed = User.User.User.id ? true : false;

  if (!signed) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
