import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div
      style={{
        border: "1px solid #d9c2b0",
        padding: "20px",
        borderRadius: "15px",
        backgroundColor: "#fffaf7",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        transition: "0.3s",
      }}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        width="200"
        style={{
          borderRadius: "10px",
          marginBottom: "15px",
        }}
      />

      <h3 style={{ color: "#7a4e3a" }}>
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
          fontSize: "18px",
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
          padding: "10px 15px",
          borderRadius: "8px",
          display: "inline-block",
          marginTop: "10px",
        }}
      >
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;