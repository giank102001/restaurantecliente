import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { useNavigate } from "react-router";

import firebase, { FirebaseContext } from "../../firebase/index";

import LoginAdmin from "./LoginAdmin";
import Dashboard from "./Dashboard";

function Admin() {
  const [usuarioAdmin, setUsuarioAdmin] = useState({});

  // navegacion
  let navigate = useNavigate();

  useEffect(() => {
    const usuarioLogeado = async () => {
      await firebase.auth().onAuthStateChanged((currentUser) => {
        if (currentUser != null) {
          setUsuarioAdmin(currentUser);
          navigate("/admin/dashboard/");
        } else {
          console.log("No hay usuario logeado");
        }
      });
    };
    usuarioLogeado();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuarioAdmin,
        setUsuarioAdmin,
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
