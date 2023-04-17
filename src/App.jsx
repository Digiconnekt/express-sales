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
  SingleStore,
} from "./pages";
import Add from "./pages/add/Add";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <div className="flex mt-[4.7rem] md:mt-0">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardMaster />} />

            <Route path="super" element={<DashboardSuper />} />
            <Route path="admin" element={<DashboardAdmin />} />
            <Route path="/store/:storeId" element={<SingleStore />} />
          </Route>

          <Route path="/add" element={<Add />}>
            <Route path="company" element={<AddCompany />} />
            <Route path="store" element={<AddStore />} />
            <Route path="sales-employee" element={<AddSalesEmployee />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
