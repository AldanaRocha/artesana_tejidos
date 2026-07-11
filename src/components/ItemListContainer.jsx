import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Item from "./Item";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

useEffect(() => {
  const obtenerProductos = async () => {
    try {
      const productosRef = collection(db, "productos");
      const snapshot = await getDocs(productosRef);

      const productosFirestore = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProductos(productosFirestore);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  obtenerProductos();
}, []);

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#fffaf7",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#7a4e3a",
          marginBottom: "40px",
        }}
      >
        Todos los productos
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {productos.map((producto) => (
          <Item
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;