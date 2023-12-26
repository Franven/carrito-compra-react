import { useContext, useReducer, useState } from "react";
import { CarritoContext } from "./CarritoContext";
import { ProductosContext } from "./ProductosContext";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const { productos } = useContext(ProductosContext);
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Agregar compra":
        return [...state, action.payload];

      case "[CARRITO] Aumentar compra":
        return state.map((compra) => {
          const cant = compra.cantidad + 1;
          if (compra.id === action.payload)
            return { ...compra, cantidad: cant };
          return compra;
        });
      case "[CARRITO] Disminuir compra":
        return state.map((compra) => {
          const cant = compra.cantidad - 1;
          if (compra.id === action.payload && compra.cantidad > 1)
            return { ...compra, cantidad: cant };
          return compra;
        });
      case "[CARRITO] Eliminar compra":
        productos.map((producto) => {
          if (producto.id === action.payload) {
            producto.agregado = false;
          }
        });
        return state.filter((compra) => compra.id !== action.payload);

      default:
        return state;
    }
  };
  const [listaCompra, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    compra.agregado = true;
    const action = {
      type: "[CARRITO] Agregar compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCompra = (id) => {
    const action = {
      type: "[CARRITO] Aumentar compra",
      payload: id,
    };
    dispatch(action);
  };

  const disminuirCompra = (id) => {
    const action = {
      type: "[CARRITO] Disminuir compra",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompra,
        agregarCompra,
        aumentarCompra,
        disminuirCompra,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
