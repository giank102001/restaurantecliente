import React from "react";
import { Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";

import firebase, { FirebaseContext } from "./firebase/index.js";

import Ordenes from "./components/paginas/Ordenes.js";
import Menu from "./components/paginas/Menu.js";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo.js";
import Sidebar from "./components/ui/Sidebar.js";
import Inicio from "./components/paginas/Inicio.js";
import Admin from "./components/paginas/Admin.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

export default App;
