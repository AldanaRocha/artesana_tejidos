import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Carrito de compras</h1>

      {cart.length === 0 ? (
        <h2>El carrito está vacío</h2>
      ) : (
        cart.map((producto, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              margin: "20px",
              padding: "20px",
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              width="150"
            />

            <h2>{producto.nombre}</h2>

            <p>Precio: ${producto.precio}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrito;