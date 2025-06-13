import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Little Lemon 🍋</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/reservas" className="navbar-button">Reservas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


