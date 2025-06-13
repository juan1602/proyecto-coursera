import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reservas');
  };
  return (
    <section style={{ padding: '40px', background: '#eee' }}>
      <h2>Bienvenido a Little Lemon</h2>
      <p>Sabores que te transportan al Mediterráneo.</p>
      <button onClick={handleClick}>Reservar una mesa</button>
    </section>
  );
}

export default Hero;
