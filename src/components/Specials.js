import React from 'react';

function Specials() {
  return (
    <section style={{ padding: '40px' }}>
      <h2>Especiales de la semana</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <div style={{ width: '200px', height: '150px', background: '#ddd' }}>Imagen</div>
          <h3>Plato 1</h3>
          <p>Descripción corta del plato 1.</p>
          <button>Ordenar</button>
        </div>
        <div>
          <div style={{ width: '200px', height: '150px', background: '#ddd' }}>Imagen</div>
          <h3>Plato 2</h3>
          <p>Descripción corta del plato 2.</p>
          <button>Ordenar</button>
        </div>
        <div>
          <div style={{ width: '200px', height: '150px', background: '#ddd' }}>Imagen</div>
          <h3>Plato 3</h3>
          <p>Descripción corta del plato 3.</p>
          <button>Ordenar</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
