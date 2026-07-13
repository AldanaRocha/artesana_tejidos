import { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Table,
} from "react-bootstrap";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/config";

const GestionCupones = () => {

  const [codigo, setCodigo] = useState("");
  const [descuento, setDescuento] = useState("");
  const [cupones, setCupones] = useState([]);

        const guardarCupon = async () => {

        if (!codigo || !descuento) {
            alert("Complete todos los campos.");
            return;
        }

        try {

            await addDoc(collection(db, "cupones"), {

            codigo: codigo.toUpperCase(),
            descuento: Number(descuento),
            activo:true,

            });

            alert("✅ Cupón creado correctamente.");

            setCodigo("");
            setDescuento("");
            obtenerCupones();

        } catch (error) {

            console.error(error);

        }

        

        };

        const obtenerCupones = async () => {

        try {

            const cuponesRef = collection(db, "cupones");

            const snapshot = await getDocs(cuponesRef);

            const listaCupones = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));

            setCupones(listaCupones);

        } catch (error) {

            console.error(error);

        }

        };



        useEffect(() => {

  obtenerCupones();

}, []);


        const eliminarCupon = async (id) => {

        try {

            await deleteDoc(doc(db, "cupones", id));

            obtenerCupones();

        } catch (error) {

            console.error(error);

        }

        };

  return (
    <Container className="mt-5">

      <h2 className="mb-4">
        Gestión de Cupones
      </h2>

      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Código</Form.Label>

          <Form.Control
            type="text"
            placeholder="Ej: ARTESANA10"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descuento (%)</Form.Label>

          <Form.Control
            type="number"
            placeholder="Ej: 10"
            value={descuento}
            onChange={(e) => setDescuento(e.target.value)}
          />
        </Form.Group>

            <Button
            variant="success"
            onClick={guardarCupon}
            >
            Guardar Cupón
            </Button>

      </Form>

      <hr className="my-5" />

      <Table striped bordered hover>

        <thead>

          <tr>
            <th>Código</th>
            <th>Descuento</th>
            <th>Acción</th>
          </tr>

        </thead>

        <tbody>

        {cupones.map((cupon) => (

            <tr key={cupon.id}>

            <td>{cupon.codigo}</td>

            <td>{cupon.descuento}%</td>

            <td>
                <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => eliminarCupon(cupon.id)}
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

export default GestionCupones;