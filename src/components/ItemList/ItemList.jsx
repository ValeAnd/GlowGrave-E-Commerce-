import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos , titulo}) => {
  return (
    <div className="container__productos">
      <div className="container__title">
          <img src="/src/assets/flower.png" alt="" />
          <h1 className="title__category">{titulo}</h1>
          <img src="/src/assets/flower2.png" alt="" />
      </div>
      <div className="productos">
        { productos.map((producto) => <Item producto ={producto} key={producto.id} />)}
      </div>
    </div>
  )
}

export default ItemList
