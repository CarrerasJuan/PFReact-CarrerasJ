import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  // Placeholder de imagen si falta
  const imagen = producto.imagen || 'https://via.placeholder.com/150';
  // Descripción fallback
  const descripcion = producto.descripcion || producto.descripccion || 'Sin descripción';
  // Título fallback
  const titulo = producto.titulo || 'Sin título';
  // Categoría fallback
  const categoria = producto.categoria || 'Sin categoría';
  // Precio y stock como número seguro
  const precio = Number(producto.precio) || 0;
  const stock = Number(producto.stock) || 0;

  return (
    <div className='producto'>
      <img src={imagen} alt={titulo} />
      <div>
        <h4>{titulo}</h4>
        <p>Precio: $ {precio}</p>
        <p>Categoria: {categoria}</p>
        <p>Descripcion: {descripcion}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Mas</Link>
        <p>Stock: {stock}</p>
      </div>
    </div>
  );
};

export default Item;
