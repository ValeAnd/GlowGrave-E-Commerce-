import { useEffect, useState } from "react"
import { pedirItemPorId } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id; //Siempre me devuelve el valor en String


  useEffect(() => {
    pedirItemPorId(Number(id))
      .then((resp) => {
          setItem(resp);
      })
  }, [id])
  
  return (
    <div>
      {
        item && <ItemDetail item={item} />
      } 
    </div>
  )
}

export default ItemDetailContainer
