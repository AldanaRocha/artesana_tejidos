import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart([...cart, producto]);
  };

  const totalProductos = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;