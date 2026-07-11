import { Link } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";

const Item = ({ producto }) => {
  return (
    <Card
      className="h-100 shadow-sm"
      style={{
        borderRadius: "15px",
        border: "1px solid #d9c2b0",
      }}
    >
      <Card.Img
        variant="top"
        src={producto.imagen}
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />

      <Card.Body className="d-flex flex-column">

        <Card.Title
          style={{
            color: "#7a4e3a",
            fontWeight: "bold",
          }}
        >
          {producto.nombre}
        </Card.Title>

        {producto.destacado && (
          <Badge
            bg="light"
            text="dark"
            className="mb-2"
          >
            ⭐ Destacado
          </Badge>
        )}

        {producto.oferta && (
          <Badge
            bg="danger"
            className="mb-2"
          >
            🔥 Oferta
          </Badge>
        )}

        <h4
          style={{
            marginTop: "10px",
            color: "#7a4e3a",
          }}
        >
          ${producto.precio}
        </h4>

        <Button
          as={Link}
          to={`/producto/${producto.id}`}
          variant="outline-secondary"
          className="mt-auto"
        >
          Ver detalle
        </Button>

      </Card.Body>
    </Card>
  );
};

export default Item;