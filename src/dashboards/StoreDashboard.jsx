import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StoreDashboard = ({ children, storeId }) => {
  const user = useSelector((state) => state.auth.user);

  if (user && user.role === "store-manager" && storeId) {
    return <Navigate to={`/store`} />;
  } else {
    return <>{children}</>;
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
