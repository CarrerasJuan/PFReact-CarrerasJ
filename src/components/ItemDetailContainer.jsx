import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productosData from "./data.json"; // JSON local

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const prod = productosData.find((p) => p.id === parseInt(id));
    setItem(prod);
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;


