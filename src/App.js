import React from "react";
import { Routes, Route } from "react-router";

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
