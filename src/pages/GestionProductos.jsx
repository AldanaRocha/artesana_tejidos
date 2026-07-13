import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Table,
  Button,
  Image,
} from "react-bootstrap";
const GestionProductos = () => {

  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const productosRef = collection(db, "productos");
      const snapshot = await getDocs(productosRef);

      const listaProductos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProductos(listaProductos);

    } catch (error) {
      console.error(error);
    }
  };

  const eliminarProducto = async (id) => {

  const confirmar = window.confirm(
    "¿Deseás eliminar este producto?"
  );

  if (!confirmar) return;

  try {

    await deleteDoc(doc(db, "productos", id));

    obtenerProductos();

  } catch (error) {

    console.error(error);

  }

};

  return (
    <Container className="mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Gestión de Productos</h2>

            <Button
            variant="success"
            onClick={() => navigate("/gestion/nuevo-producto")}
            >
            Nuevo Producto
            </Button>
            <Button
            
              as={Link}
              to="/gestion-cupones"
              variant="primary"
            >
              Cupones
            </Button>


                </div>

      <Table striped bordered hover responsive>

        <thead>

          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody>

          {productos.map((producto) => (

            <tr key={producto.id}>

              <td style={{ width: "120px" }}>
                <Image
                  src={producto.imagen}
                  width={80}
                  rounded
                />
              </td>

              <td>{producto.nombre}</td>

              <td>${producto.precio}</td>

              <td>{producto.stock}</td>

              <td>

                <Button
                variant="outline-primary"
                size="sm"
                className="me-2"
                onClick={() =>
                    navigate(`/gestion/nuevo-producto/${producto.id}`)
                }
                >
                Editar
                </Button>

                
                <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => eliminarProducto(producto.id)}
                >
                Eliminar
                </Button>
              </td>

            </tr>

          ))}

        </tbody>

      </Table>

    </Container>
  );
};

export default GestionProductos;