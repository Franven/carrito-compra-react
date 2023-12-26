import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { listaCompra, aumentarCompra, disminuirCompra, eliminarCompra } =
    useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompra
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  const handleImpresion = () => {
    if (listaCompra.length > 0) {
      listaCompra.forEach((item) => {
        eliminarCompra(item.id);
      });
      alert("COMPRA EXITOSA");
    }
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompra.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => disminuirCompra(item.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => aumentarCompra(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th>Total:</th>
            <td></td>
            <td></td>
            <td>${calcularTotal()}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={handleImpresion}>
          COMPRAR
        </button>
      </div>
    </>
  );
};
