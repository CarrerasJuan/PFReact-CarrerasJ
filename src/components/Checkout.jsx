import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [pedidoId, setPedidoId] = useState('');
  const [mensajeExito, setMensajeExito] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const comprar = (data) => {
    if (carrito.length === 0) return;

    // Simulamos un ID de pedido
    const idSimulado = 'PED-' + Math.floor(Math.random() * 10000);
    setPedidoId(idSimulado);

    // Limpiamos carrito y formulario
    vaciarCarrito();
    reset();
    setMensajeExito(true);
  };

  return (
    <div className="container checkout-container">
      {mensajeExito ? (
        <div className="compra-exitosa">
          <h1>¡Muchas gracias por tu compra!</h1>
          <p>Tu número de pedido es: <strong>{pedidoId}</strong></p>
          <Link to="/" className="boton-volver">Volver a productos</Link>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
          <h1 className="main-title">Finalizar compra</h1>
          <input
            type="text"
            placeholder="Ingresá tu nombre"
            {...register('nombre', { required: true })}
          />
          <input
            type="email"
            placeholder="Ingresá tu e-mail"
            {...register('email', { required: true })}
          />
          <input
            type="tel"
            placeholder="Ingresá tu teléfono"
            {...register('telefono', { required: true })}
          />
          <button className="boton-comprar" type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;