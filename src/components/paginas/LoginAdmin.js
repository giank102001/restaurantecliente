import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router';
import { useFormik } from "formik";
import * as Yup from "yup";
import { LockClosedIcon } from "@heroicons/react/solid";

import { FirebaseContext } from "../../firebase";

const LoginAdmin = () => {
  const { firebase, usuarioAdmin, setUsuarioAdmin } = useContext(FirebaseContext);


  //navegacion
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (usuario) => {
      const iniciarSesion = (usuario) => {
        try {
          firebase
            .auth()
            .signInWithEmailAndPassword(usuario.email, usuario.password)
            .then((usuarioFirebase) => {
              setUsuarioAdmin(usuarioFirebase.user);
              navigate("/admin/dashboard/")
            });
        } catch (error) {
          console.log(error);
        }
      };
      iniciarSesion(usuario);
    },
  });

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Inicia sesion
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
