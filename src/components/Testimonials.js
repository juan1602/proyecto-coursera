import React from 'react';

function Testimonials() {
  return (
    <section style={{ padding: '40px', background: '#f9f9f9' }}>
      <h2>Testimonios</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} style={{ padding: '10px', border: '1px solid #ccc', width: '200px' }}>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Nombre del cliente</p>
            <div style={{ width: '50px', height: '50px', background: '#ddd', borderRadius: '50%' }}>Foto</div>
            <p>Comentario del cliente.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
