import React from "react";
import { Routes, Route } from "react-router";
import { AnimatePresence } from 'framer-motion';

import firebase, { FirebaseContext } from "./firebase/index.js";

import Ordenes from "./components/paginas/Ordenes.js";
import Menu from "./components/paginas/Menu.js";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo.js";
import Sidebar from "./components/ui/Sidebar.js";

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <div className="md:flex min-h-screen">
        <Sidebar />
        <div className="md:min-h-screen md:w-2/5 xl:w-1/5"></div> 
        <div className="md:w-3/5 xl:w-4/5 p-6">
          <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Ordenes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
          </Routes>
          </AnimatePresence>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
