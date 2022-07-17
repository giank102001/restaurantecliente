import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

import { FirebaseContext } from "../../firebase";

import Ordenes from "./Ordenes.js";
import Menu from "./Menu";
import NuevoPlatillo from "./NuevoPlatillo.js";

import Sidebar from "../ui/Sidebar.js";

function Dashboard() {
  // navegacion
  let navigate = useNavigate();

  const { usuarioAdmin, firebase, setUsuarioAdmin } =
    useContext(FirebaseContext);

  useEffect(() => {
    if (Object.entries(usuarioAdmin).length === 0) {
      navigate("/admin/");
    } else {
      console.log("Si hay algo");
      console.log(usuarioAdmin._delegate.email);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuarioAdmin]);

  return (
    <div className="md:flex min-h-screen">
      <button
        onClick={async () => {
          console.log("click");
          await firebase.auth().signOut();
          setUsuarioAdmin({});
        }}
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Cerrar sesion
      </button>
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
