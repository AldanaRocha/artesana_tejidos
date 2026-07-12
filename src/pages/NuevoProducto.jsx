import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection,doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const NuevoProducto = () => {
        const [nombre, setNombre] = useState("");
        const [descripcion, setDescripcion] = useState("");
        const [precio, setPrecio] = useState("");
        const [stock, setStock] = useState("");
        const [imagen, setImagen] = useState("");
        const [destacado, setDestacado] = useState(false);
        
        const navigate = useNavigate();
        const { id } = useParams();
            useEffect(() => {

            const cargarProducto = async () => {

                if (!id) return;

                try {

                const productoRef = doc(db, "productos", id);

                const snapshot = await getDoc(productoRef);

                if (snapshot.exists()) {

                    const producto = snapshot.data();

                    setNombre(producto.nombre);
                    setDescripcion(producto.descripcion);
                    setPrecio(producto.precio);
                    setStock(producto.stock);
                    setImagen(producto.imagen);
                    setDestacado(producto.destacado);

                }

                } catch (error) {

                console.error(error);

                }

            };

            cargarProducto();

            }, [id]);

        const guardarProducto = async () => {

  if (
    !nombre ||
    !descripcion ||
    !precio ||
    !stock ||
    !imagen
  ) {
    alert("Complete todos los campos.");
    return;
  }

  try {
        if (id) {

        await updateDoc(doc(db, "productos", id), {
            nombre,
            descripcion,
            precio: Number(precio),
            stock: Number(stock),
            imagen,
            destacado,
        });

        alert("✅ Producto actualizado correctamente.");

        } else {

        await addDoc(collection(db, "productos"), {
            nombre,
            descripcion,
            precio: Number(precio),
            stock: Number(stock),
            imagen,
            destacado,
        });

        alert("✅ Producto agregado correctamente.");

        }



    navigate("/gestion");

  } catch (error) {

    console.error(error);

  }

};

  return (
    <Container className="mt-5">

            <h2>
            {id ? "Editar Producto" : "Nuevo Producto"}
            </h2>
      <Form>

       <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    type="text"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Producto destacado"
                    checked={destacado}
                    onChange={(e) => setDestacado(e.target.checked)}
                />
                </Form.Group>

                <Button
                variant="success"
                onClick={guardarProducto}
                >
                {id ? "Guardar" : "Guardar Producto"}
                </Button>
      </Form>

    </Container>
  );
};

export default NuevoProducto;