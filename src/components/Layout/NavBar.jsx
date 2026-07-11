
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { onAuthStateChanged, signOut } from "firebase/auth";

import CartWidget from "../CartWidget";
import { auth } from "../../firebase/config";

const NavBar = () => {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return () => unsubscribe();

  }, []);


  const cerrarSesion = () => {
    signOut(auth);
  };


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
            {
              usuario ? (
                <>
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold"
                    }}
                  >
                    Hola, {usuario.email}
                  </span>
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
                  <Nav.Link
                    onClick={cerrarSesion}
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                  >
                    Cerrar sesión
                  </Nav.Link>
                </>
              )
              :
              (
                <>
                  <Nav.Link
                    as={Link}
                    to="/login"
                    style={{
                      color: "white",
                      fontWeight: "bold"
                    }}
                  >
                    Login
                  </Nav.Link>


                  <Nav.Link
                    as={Link}
                    to="/register"
                    style={{
                      color: "white",
                      fontWeight: "bold"
                    }}
                  >
                    Registrarse
                  </Nav.Link>
                </>
              )
            }









          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavBar;

