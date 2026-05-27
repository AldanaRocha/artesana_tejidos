import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProductos } = useContext(CartContext);

  return (
    <div>
      🛒 {totalProductos}
    </div>
  );
};

export default CartWidget;