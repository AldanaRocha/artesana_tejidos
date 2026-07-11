import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";
import Item from "../components/Item";

const Home = () => {
  const [productos, setProductos] = useState([]);

useEffect(() => {

  const obtenerProductos = async () => {

    const productosRef = collection(db, "productos");

    const snapshot = await getDocs(productosRef);

    console.log("Snapshot:", snapshot);


    const listaProductos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Productos:", listaProductos);

     setProductos(listaProductos);

    // const destacados = listaProductos.filter(
    //   (producto) => producto.destacado === true
    // );

    // setProductos(destacados);

  };

  obtenerProductos();

}, []);

  return (
    <div
      style={{
        backgroundColor: "#f8c9ad",
        minHeight: "100vh",
      }}
    >
      {/* PORTADA */}
      <div
        style={{
          backgroundImage:
            "url('/images/Escarapela.png')",
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "black",
          textAlign: "center",
          textShadow: "2px 2px 10px black",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "15px",
          }}
        >
          Artesana
        </h1>

        <p
          style={{
            fontSize: "24px",
            maxWidth: "700px",
          }}
        >
          Tejidos en crochet y
          macramé 
        </p>
      </div>

      {/* CONTENIDO */}
      <div style={{ padding: "40px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#7a4e3a",
            marginBottom: "40px",
            fontSize: "35px",
          }}
        >
          Productos destacados
        </h2>

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
    </div>
  );
};

export default Home;