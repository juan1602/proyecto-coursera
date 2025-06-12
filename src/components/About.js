import React from 'react';

function About() {
  return (
    <section style={{ padding: '40px' }}>
      <h2>Sobre Little Lemon</h2>
      <p>Somos Adrián y Mario, y amamos la cocina mediterránea.</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ width: '200px', height: '150px', background: '#ccc' }}>Foto Adrián</div>
        <div style={{ width: '200px', height: '150px', background: '#ccc' }}>Foto Mario</div>
      </div>
    </section>
  );
}

export default About;
