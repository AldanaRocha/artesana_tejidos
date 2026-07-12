import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {

    const obtenerProductos = async () => {
      try {

        const productosRef = collection(db, "productos");

        const snapshot = await getDocs(productosRef);

        const listaProductos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(listaProductos);

      } catch (error) {
        console.error(error);
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

  obtenerProductos();

}, []);

      if (loading) {
        return (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <Spinner animation="border" variant="secondary" />

            <p className="mt-3">
              Cargando productos...
            </p>
          </div>
        );
      }

      if (error) {
          return (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ height: "70vh" }}
            >
              <h3 className="text-danger">
                {error}
              </h3>

              <p>
                Intente nuevamente más tarde.
              </p>
            </div>
          );
        }


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