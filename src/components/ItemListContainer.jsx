import { useEffect, useState } from "react";
import Item from "./Item";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
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