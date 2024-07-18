import { pedirDatos } from "../../asyncMock"
import { useEffect, useState } from 'react'

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

  function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo]= useState("Productos");

    useEffect(() => {
      pedirDatos()
        .then((res) => {
          if(categoria){
            setProductos(res.filter((productos) => productos.categoria === categoria));
            setTitulo(categoria);
          }else{
            setProductos(res)
          }
        })
    }, [categoria]);
    
    return (
      <>
        < ItemList productos={productos} titulo={titulo}/>
      </>
    );
  }
  
  export default ItemListContainer