import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { FirebaseContext } from "../../firebase";

const Sidebar = () => {
  const { usuarioAdmin, setUsuarioAdmin } = useContext(FirebaseContext);
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800 md:fixed md:min-h-screen">
      <div className="p-6">
        <p className="text-center font-bold uppercase text-white text-2xl tracking-wide">
          RestaurantApp
        </p>
        <p className="mt-3 text-gray-400">
          Administra tu restaurant en las siguintes opciones
        </p>

        <nav className="mt-10">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 p-1 block hover:bg-yellow-500 hover:text-gray-900"
                : "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            }
            end
            to="/admin/dashboard/"
          >
            Ordenes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 p-1 block hover:bg-yellow-500 hover:text-gray-900"
                : "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            }
            end
            to="/admin/dashboard/menu"
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
