import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const { cart, removeFromCart, clearCart,totalCompra } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <h1>Carrito de compras</h1>

      {cart.length === 0 ? (
        <h2>El carrito está vacío</h2>
      ) : (
        <>
          {cart.map((producto) => (
            <div
              key={producto.id}
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

              <p>Cantidad: {producto.cantidad}</p>

              <Button
                variant="light"
                onClick={() => removeFromCart(producto.id)}
                className="mt-2"
              >
                Eliminar
              </Button>
            </div>
          ))}
            <h2>
              Total: ${totalCompra}
            </h2>
          <div className="text-center mt-4">
            <Button
              variant="secondary"
              onClick={clearCart}
            >
              Vaciar carrito
            </Button>

              <Button
                variant="success"
                onClick={() => navigate("/checkout")}
              >
                Finalizar compra
              </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;