import React, { useState } from "react";
import "../styles/card.css";

export const Card = ({
  imagen,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleQuitar,
  agregado,
}) => {
  const clickQuitar = () => {
    handleQuitar();
  };
  const clickAgregar = () => {
    handleAgregar();
  };

  return (
    <>
      <div className="tarjeta">
        <img src={imagen} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
          <h3 className="tarjeta-titulo">{titulo}</h3>
          <p className="tarjeta-descripcion">{descripcion}</p>
          <p className="tarjeta.precio">${precio}</p>
          {agregado ? (
            <button onClick={clickQuitar} className="boton-quitar">
              Quitar del carrito
            </button>
          ) : (
            <button onClick={clickAgregar} className="boton-agregar">
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </>
  );
};
