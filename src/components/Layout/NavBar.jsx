import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#d8b4a0" }}
      className="py-3"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          ___artesanaaa___
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/productos"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Productos
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/carrito"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;