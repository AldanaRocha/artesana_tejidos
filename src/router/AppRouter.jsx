import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Productos from "../pages/Productos";
import ProductosDetalle from "../pages/ProductosDetalle";
import Carrito from "../pages/Carrito";
import Checkout from "../pages/Checkout";

import Layout from "../components/Layout/Layout";
import Register from "../pages/Register";
import Login from "../pages/Login"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/productos"
            element={<Productos />}
          />

          <Route
            path="/producto/:id"
            element={<ProductosDetalle />}
          />

          <Route
            path="/carrito"
            element={<Carrito />}
          />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;