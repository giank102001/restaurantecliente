import React from "react";
import { Routes, Route } from "react-router";

import Inicio from "./components/paginas/Inicio.js";
import Admin from "./components/paginas/Admin.js";

const NotFoundPage = () => {
  return (
    <div className="">
      <h1>Pagina no encontrada</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
