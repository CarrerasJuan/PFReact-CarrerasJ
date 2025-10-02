import React from 'react'

const Accesorios = ({ productos = [] }) => {
  return (
    <div className='container'>
      <h1 className='main-title'>Accesorios</h1>
      {productos.length > 0 ? (
        <div className='productos-grid'>
          {productos.map((p) => (
            <div key={p.id} className='producto'>
              <img src={p.imagen || '/placeholder.png'} alt={p.titulo || 'Producto'} />
              <h4>{p.titulo || 'Sin título'}</h4>
              <p>Precio: ${p.precio || 0}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  )
}

export default Accesorios
