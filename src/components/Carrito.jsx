import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="container carrito-vacio">
        <h1 className="main-title">Tu carrito está vacío 😢</h1>
        <p>¡Todavía no agregaste productos!</p>
        <Link to="/" className="boton-volver">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container carrito-factura">
      {/* Columna izquierda: items */}
      <div className="carrito-items">
        {carrito.map((prod) => (
          <div className="carrito-item" key={prod.id}>
            <img
              src={prod.imagen || "/placeholder.png"}
              alt={prod.titulo}
              className="carrito-img"
            />
            <div className="carrito-info">
              <h3>{prod.titulo}</h3>
              <p>Precio unitario: ${prod.precio}</p>
              <p>Cantidad: {prod.cantidad}</p>
              <p>Subtotal: ${prod.precio * prod.cantidad}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Columna derecha: resumen */}
      <div className="carrito-resumen">
        <h2>Total: ${precioTotal()}</h2>
        <div className="carrito-botones">
          <button className="boton-vaciar" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
          <Link className="boton-comprar" to="/checkout">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
