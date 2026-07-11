import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Badge,
} from "react-bootstrap";

const ProductosDetalle = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  const { addToCart } = useContext(CartContext);
useEffect(() => {
  const obtenerProducto = async () => {
    try {
      const productoRef = doc(db, "productos", id);

      const snapshot = await getDoc(productoRef);

      if (snapshot.exists()) {
        setProducto({
          id: snapshot.id,
          ...snapshot.data(),
        });
      } else {
        console.log("El producto no existe");
      }
    } catch (error) {
      console.error(error);
    }
  };

  obtenerProducto();
}, [id]);

  if (!producto) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="my-5">
      <Card className="shadow p-4">
        <Row className="align-items-center">

          <Col md={6} className="text-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded"
              style={{ maxHeight: "450px" }}
            />
          </Col>

          <Col md={6}>

            <h2
              style={{
                color: "#7a4e3a",
                fontWeight: "bold",
              }}
            >
              {producto.nombre}
            </h2>

            {producto.destacado && (
              <Badge
                bg="light"
                text="dark"
                className="me-2"
              >
                ⭐ Destacado
              </Badge>
            )}

            {producto.oferta && (
              <Badge bg="danger">
                🔥 Oferta
              </Badge>
            )}

            <h3
              className="mt-4"
              style={{ color: "#7a4e3a" }}
            >
              ${producto.precio}
            </h3>

            <p
              className="mt-3"
              style={{
                fontSize: "18px",
                color: "#555",
              }}
            >
              {producto.descripcion}
            </p>

            <p className="mt-3">
              <strong>Stock:</strong> {producto.stock}
            </p>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => addToCart(producto)}
            >
              Agregar al carrito
            </Button>

          </Col>

        </Row>
      </Card>
    </Container>
  );
};

export default ProductosDetalle;