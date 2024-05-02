import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StoreDashboard = ({ children, storeId }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "master") {
    if (!storeId) {
      return <Navigate to={`/`} />;
    } else {
      return <>{children}</>;
    }
  }

  if (user && user.role === "company-manager") {
    if (!storeId) {
      return <Navigate to={`/`} />;
    } else {
      return <>{children}</>;
    }
  }

  if (user && user.role === "store-manager") {
    if (storeId) {
      return <Navigate to={`/store`} />;
    } else {
      return <>{children}</>;
    }
  }
};

export const OnlyStore = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "store-manager") {
    return <>{children}</>;
  } else {
    return <Navigate to={`/`} />;
  }
};

export default StoreDashboard;
