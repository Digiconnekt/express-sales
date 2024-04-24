import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyDashboard = ({ children, companyId }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "store-manager") {
    return <Navigate to={`/store`} />;
  } else if (user && user.role === "company-manager") {
    if (companyId) {
      return <Navigate to={`/company`} />;
    } else {
      return <>{children}</>;
    }
  } else {
    return <>{children}</>;
  }
};

export const OnlyCompany = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "company-manager") {
    return <>{children}</>;
  } else {
    return <Navigate to={`/`} />;
  }
};

export default CompanyDashboard;
