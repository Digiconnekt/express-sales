import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Admin from "../pages/Admin";

const AdminDashboard = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "company-manager") {
    return <Navigate to={`/company`} />;
  } else {
    return <>{children}</>;
  }
};

export default AdminDashboard;