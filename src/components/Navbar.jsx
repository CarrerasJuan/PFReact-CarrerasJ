import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" ><img  className="logo" src="https://media.istockphoto.com/id/1144084265/es/vector/plantilla-de-dise%C3%B1o-abstracto-de-vector-de-fitness-dise%C3%B1o-para-gimnasio-y-vector-de-fitness.jpg?s=612x612&w=0&k=20&c=ETK9usK_AxmTwDxQ9VgjljXic6f0JvnjXF4cfmL-Gms=" /></Link>
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
