import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    const addToCart = (producto) => {

      const existe = cart.find(
        (item) => item.id === producto.id
      );

      if (existe) {

        const carritoActualizado = cart.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        );

        setCart(carritoActualizado);

      } else {

        setCart([
          ...cart,
          {
            ...producto,
            cantidad: 1,
          },
        ]);

      }
    };

   const removeFromCart = (id) => {
        const carritoActualizado = cart.filter(
          (producto) => producto.id !== id
        );

        setCart(carritoActualizado);
      };

   const clearCart = () => {
          setCart([]);
        };

      const totalProductos = cart.reduce(
        (acc, producto) => acc + producto.cantidad,
        0
      );

      const totalCompra = cart.reduce(
  (acc, producto) =>
    acc + producto.precio * producto.cantidad,
  0
);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalProductos,
        totalCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;