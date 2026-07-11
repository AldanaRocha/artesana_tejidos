import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";

import {
  Container,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const registrarUsuario = async (e) => {
    e.preventDefault();

    setError("");

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Ese correo ya está registrado.");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres.");
      } else if (error.code === "auth/invalid-email") {
        setError("Correo electrónico inválido.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ width: "400px" }} className="p-4 shadow">

        <h2 className="text-center mb-4">
          Crear cuenta
        </h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={registrarUsuario}>

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
              placeholder="Ingrese una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="secondary"
            className="w-100"
          >
            Registrarse
          </Button>

        </Form>

        <p className="text-center mt-3">
          ¿Ya tenés cuenta?{" "}
          <Link to="/login">
            Iniciar sesión
          </Link>
        </p>

      </Card>
    </Container>
  );
};

export default Register;