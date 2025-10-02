import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);
    const cantidad = cantidadEnCarrito();

    return (
        <div className="cart-widget">
            <Link className="menu-link" to="/carrito">
                🛒
                {cantidad > 0 && (
                    <span className="numerito">{cantidad}</span>
                )}
            </Link>
        </div>
    )
}

export default CartWidget;