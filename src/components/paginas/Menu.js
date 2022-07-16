import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../firebase';
import { motion } from 'framer-motion';

import Platillo from '../ui/Platillo';

const Menu = () => {

  // definir el state para los platillos 
  const [platillos, setPlatillos] = useState([])

  const { firebase } = useContext(FirebaseContext)

  // consultar la base de datos al cargar 
  useEffect(() => {
    const obtenerPlatilos = () => {
      try {
        firebase.db.collection('productos').onSnapshot(handleSnapshot)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerPlatilos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // snapshot nos permite utilizaar la base de datos en tiempo real de firestore
  function handleSnapshot(snapshot) {
    const platillos = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    // almacenar los platillos en el state
    setPlatillos(platillos)
  }

  return (
     <motion.div
      initial={{ x: 100, }}
      animate={{ x: 0, }}
      exit={{x: -100 }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
     >
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/admin/dashboard/nuevo-platillo"
        className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Agregar Platillo
      </Link>

      {platillos.map(platillo => (
        <Platillo
          key={platillo.id}
          platillo={platillo}
        />
      ))}
      </motion.div> 
  );
}

export default Menu