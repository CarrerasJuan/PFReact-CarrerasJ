import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useState, useEffect, useRef } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  // Cerrar menú si hago click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <img
          src="https://media.istockphoto.com/id/1144084265/es/vector/plantilla-de-dise%C3%B1o-abstracto-de-vector-de-fitness-dise%C3%B1o-para-gimnasio-y-vector-de-fitness.jpg?s=612x612&w=0&k=20&c=ETK9usK_AxmTwDxQ9VgjljXic6f0JvnjXF4cfmL-Gms="
          alt="logo"
        />
      </Link>

      {/* Botón hamburguesa */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Menú */}
      <ul ref={menuRef} className={`menu ${open ? "open" : ""}`}>
        <li><Link className="menu-link" to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
        <li><Link className="menu-link" to="/productos/accesorios" onClick={() => setOpen(false)}>Accesorios</Link></li>
        <li><Link className="menu-link" to="/productos/suplementos" onClick={() => setOpen(false)}>Suplementos</Link></li>
        <li><Link className="menu-link" to="/productos/indumentaria" onClick={() => setOpen(false)}>Indumentaria</Link></li>
        <CartWidget />
      </ul>
    </nav>
  )
}

export default Navbar
