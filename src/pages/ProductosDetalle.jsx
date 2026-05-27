import { useParams } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductosDetalle = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => {
        const productoEncontrado = data.find(
          (prod) => prod.id === Number(id)
        );

        setProducto(productoEncontrado);
      });
  }, [id]);

  if (!producto) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        width="300"
      />

      <h1>{producto.nombre}</h1>

      <h2>${producto.precio}</h2>

      <p>Stock disponible: {producto.stock}</p>
      <button onClick={() => addToCart(producto)}>
            Agregar al carrito
            </button>
    </div>
  );
};

export default ProductosDetalle;