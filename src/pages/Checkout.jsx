import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const Checkout = () => {
  const { cart, totalCompra, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
const [mensaje, setMensaje] = useState("");

const confirmarCompra = () => {

  if (!nombre || !email || !telefono) {
    setMensaje("⚠️ Complete todos los campos.");
    return;
  }

  setMensaje("✅ ¡Compra realizada con éxito!");


  setNombre("");
  setEmail("");
  setTelefono("");

};
  return (
    <div className="container mt-4">
      <h1>Finalizar compra</h1>

      <hr />

      <h3>Resumen del pedido</h3>

      {cart.map((producto) => (
        <div key={producto.id} className="mb-2">
          <strong>{producto.nombre}</strong> x {producto.cantidad}
          <span className="ms-2">
            ${producto.precio * producto.cantidad}
          </span>
        </div>
      ))}

      <h2 className="mt-4">
        Total: ${totalCompra}
      </h2>

      <hr />

      <h3>Datos del comprador</h3>

      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresá tu nombre"
              value={nombre}
                onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresá tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}    
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresá tu teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>

            <Button
            variant="success"
            onClick={confirmarCompra}
            >
            Confirmar compra
            </Button>
                              
              {mensaje && (
            <p className="mt-3 fw-bold">
                {mensaje}
            </p>
            )}

      </Form>
    </div>
  );
};

export default Checkout;