import React from "react";
import { Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";


import Ordenes from "./Ordenes.js";
import Menu from "./Menu";
import NuevoPlatillo from "./NuevoPlatillo.js";

import Sidebar from "../ui/Sidebar.js";

function Dashboard() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:min-h-screen md:w-2/5 xl:w-1/5"></div>
      <div className="md:w-3/5 xl:w-4/5 p-6">
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Ordenes />} />
            <Route path="menu" element={<Menu />} />
            <Route path="nuevo-platillo" element={<NuevoPlatillo />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Dashboard;
