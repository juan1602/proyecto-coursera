import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h1 style={{ display: 'inline' }}>Little Lemon</h1>
      <ul style={{ listStyle: 'none', display: 'inline', float: 'right' }}>
        <li style={{ display: 'inline', margin: '0 10px' }}>Inicio</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Nosotros</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Menú</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
