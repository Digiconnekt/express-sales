import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminDashboard = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "master") {
    return <>{children}</>;
  }

  if (user && user.role === "company-manager") {
    return <Navigate to={`/company`} />;
  }

  if (user && user.role === "store-manager") {
    return <Navigate to={`/store`} />;
  }
};

export const OnlyAdmin = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "master") {
    return <>{children}</>;
  } else {
    return <Navigate to={`/`} />;
  }
};

export default AdminDashboard;
