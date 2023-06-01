import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  DashboardMaster,
  DashboardSuper,
  DashboardAdmin,
  Login,
  AddCompany,
  AddStore,
  AddSalesEmployee,
  EmployeeDetails,
} from "./pages";
import Add from "./pages/add/Add";
import Error from "./pages/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollToTop } from "./components";
import Edit from "./pages/edit/Edit";
import EditCompany from "./pages/edit/EditCompany";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <div className="flex mt-[4.7rem] md:mt-0">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardMaster />} />

            <Route path="super" element={<DashboardSuper />} />
            <Route path="admin" element={<DashboardAdmin />} />

            <Route
              path="admin/employee/:employeeId"
              element={<EmployeeDetails />}
            />
          </Route>

          <Route path="/add" element={<Add />}>
            <Route path="company" element={<AddCompany />} />
            <Route path="store" element={<AddStore />} />
            <Route path="sales-employee" element={<AddSalesEmployee />} />
          </Route>

          <Route path="/edit" element={<Edit />}>
            <Route path="company/:id" element={<EditCompany />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <ToastContainer />
    </>
  );
};

export default App;
