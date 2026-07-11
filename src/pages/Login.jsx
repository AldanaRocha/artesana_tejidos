import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";

import {
  Container,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const iniciarSesion = async (e) => {
    e.preventDefault();

    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h2 className="text-center mb-4">
          Iniciar sesión
        </h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={iniciarSesion}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Contraseña</Form.Label>

            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="secondary"
            className="w-100"
          >
            Iniciar sesión
          </Button>
        </Form>

        <p className="text-center mt-3">
          ¿No tenés cuenta?{" "}
          <Link to="/register">
            Registrarse
          </Link>
        </p>
      </Card>
    </Container>
  );
};

export default Login;