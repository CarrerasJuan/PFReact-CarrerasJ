import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import productosData from "./data.json"; // <-- importa tu JSON

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    const filtrados = categoria
      ? productosData.filter(p => p.categoria === categoria)
      : productosData;
    setProductos(filtrados);
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
