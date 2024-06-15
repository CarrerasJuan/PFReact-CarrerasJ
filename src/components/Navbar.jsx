import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" ><img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCoQjHPCmh6vcitpzGqErT-vZkgr1Tbs_vkA&s" /></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            {/* <li><Link className="menu-link" to="/productos">Productos</Link></li> */}
            <li><Link className="menu-link" to="/productos/accesorios">Accesorios</Link></li>
            <li><Link className="menu-link" to="/productos/suplementos">Suplementos</Link></li>
            <li><Link className="menu-link" to="/productos/indumentaria">Indumentaria</Link></li>
            {/* <li><Link className="menu-link" to="/contacto">Contacto</Link></li> */}
            <CartWidget />
        </ul>
    </nav>
  )
}

export default Navbar
