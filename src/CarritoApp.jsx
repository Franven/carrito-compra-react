import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
          <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
          <Route path="/*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </CarritoProvider>
    </ProductosProvider>
  );
};
