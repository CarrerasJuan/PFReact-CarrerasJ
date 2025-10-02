import React from "react";
import "./Footer.css"; // si querés estilos separados

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Tienda Hecha por Carreras Juan Esteban - Todos los derechos reservados</p>
<div className="social-media">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
  </a>
</div>
    </footer>
  );
};

export default Footer;