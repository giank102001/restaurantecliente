import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
      Inicio

      <Link
        to="/admin"
        className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Agregar Platillo
      </Link>
    </div>
  )
}

export default Inicio