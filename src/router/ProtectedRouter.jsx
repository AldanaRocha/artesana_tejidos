import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../firebase/config";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [esAdmin, setEsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setEsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const datos = docSnap.data();

          if (datos.rol === "admin") {
            setEsAdmin(true);
          } else {
            setEsAdmin(false);
          }
        } else {
          setEsAdmin(false);
        }
      } catch (error) {
        console.error(error);
        setEsAdmin(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Cargando...</h3>;
  }

  return esAdmin ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;