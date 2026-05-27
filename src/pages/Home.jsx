import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => {
        const destacados = data.filter(
          (producto) => producto.destacado === true
        );

        setProductos(destacados);
      });
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
            <div
              key={producto.id}
              style={{
                border: "1px solid #d9c2b0",
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "white",
                textAlign: "center",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                width="220"
                style={{
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />

              <h3
                style={{
                  color: "#7a4e3a",
                }}
              >
                {producto.nombre}
              </h3>

              {producto.destacado && (
                <p
                  style={{
                    color: "#b07d4f",
                    fontWeight: "bold",
                  }}
                >
                  ⭐ Producto destacado
                </p>
              )}

              {producto.oferta && (
                <p
                  style={{
                    color: "#c94c4c",
                    fontWeight: "bold",
                  }}
                >
                  🔥 Oferta
                </p>
              )}

              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                ${producto.precio}
              </p>

              <Link
                to={`/producto/${producto.id}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#d8b4a0",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  display: "inline-block",
                  marginTop: "10px",
                }}
              >
                Ver detalle
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;