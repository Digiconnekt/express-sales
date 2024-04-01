import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import SuperAdminDashboard from "../pages/SuperAdminDashboard";
import CompanyDashboard from "../pages/CompanyDashboard";
import StoreDashboard from "../pages/StoreDashboard";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <SuperAdminDashboard />,
        },
        {
          path: "/company/:id",
          element: <CompanyDashboard />,
        },
        {
          path: "/store/:id",
          element: <StoreDashboard />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;