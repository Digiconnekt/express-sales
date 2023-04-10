import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Dashboard, Login, Sample } from "./pages";

const App = () => {
  return (
    <>
      <div className="flex mt-[4.7rem] md:mt-0">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="sample" element={<Sample />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
