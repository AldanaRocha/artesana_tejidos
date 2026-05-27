import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#d8b4a0",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
        }}
      >
        ___artesanaaa___
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Inicio
        </Link>

        <Link
          to="/productos"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Productos
        </Link>

        <Link
          to="/carrito"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;