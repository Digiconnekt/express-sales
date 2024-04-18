import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Admin from "../pages/Admin";

const CompanyDashboard = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && (user.role === "company-manager" || user.role === "master")) {
    return <>{children}</>;
  }
  // else if (user && user.id !== id) {
  //   return <Navigate to={`/company/${user.id}`} />;
  // }
  else {
    return null;
  }
};

export default CompanyDashboard;
