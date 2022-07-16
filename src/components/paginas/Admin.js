import React, {useState} from "react";
import { Routes, Route } from "react-router";

import firebase, { FirebaseContext } from "../../firebase/index";

import LoginAdmin from "./LoginAdmin";
import Dashboard from "./Dashboard";

function Admin() {

  const [usuarioAdmin, setUsuarioAdmin] = useState({})

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuarioAdmin,
        setUsuarioAdmin
      }}
    >
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </FirebaseContext.Provider>
  );
}

export default Admin;
