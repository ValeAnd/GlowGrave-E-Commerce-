import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

  function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo]= useState("Productos");

    useEffect(() => {

      const productosRef = collection (db, "productos");
 
      const filtrado = categoria && categoria !== "todos"? query(productosRef, where("categoria", "==", categoria)) : productosRef;
      //El getDocs me devuelve un QuerySnapshot que es una colleccion de documentos

      getDocs(filtrado)
        .then((res) => {
          setProductos(
            res.docs.map((doc) => {
              return { ...doc.data(), id: doc.id}
            })
          )
          setTitulo(categoria && categoria !== "todos" ? categoria : "Todos los productos");
        })

    }, [categoria]);
    
    return (
      <>
        < ItemList productos={productos} titulo={titulo}/>
      </>
    );
  }
  
  export default ItemListContainer