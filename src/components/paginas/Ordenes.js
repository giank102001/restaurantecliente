import React, {useEffect, useContext, useState} from 'react'
import { FirebaseContext } from '../../firebase'
import Orden from '../ui/Orden'
import { motion } from 'framer-motion';

const Ordenes = () => {

  // context de firebase
  const { firebase } = useContext(FirebaseContext)

  // state con las ordenes 
  const [ordenes, setOrdenes] = useState([])

  useEffect(() => {
    const obtenerOrdenes = () => {
      firebase.db.collection('ordenes').where('completado', '==', false).onSnapshot(manejarSnapshot)
    }
    obtenerOrdenes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function manejarSnapshot(snapshot) {
    const ordenes = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })

    setOrdenes(ordenes)
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
        <h1 className="text-3xl font-light mb-4">Desde ordenes</h1>

        <div className="sm:flex sm:flex-wrap -mx-3">
          {ordenes.map((orden, i) => (
            <>
              <Orden key={orden.id} orden={orden} />
              {(i + 1) % 3 === 0 && (
                <div className="lg:block hidden w-full bg-gray-700 h-0.5 shadow mb-5"></div>
              )}
            </>
          ))}
        </div>
      </motion.div>
  );
}

export default Ordenes