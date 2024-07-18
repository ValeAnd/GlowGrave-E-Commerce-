import { Link } from 'react-router-dom'
import './Item.css'
import { FaRegHeart } from "react-icons/fa";

const Item = ({producto}) => {
  return (
    <div className="container__product">
      <div className="product__heart">
        <FaRegHeart size= {20} className='heart__icon'/>
      </div>
      <img src={producto.imagen} alt="" />
      <h3>{producto.titulo}</h3>
      <h4>S/{producto.precio}</h4>
      <Link to={`/item/${producto.id}`} className="button__link"><button>Ver Mas</button></Link>
    </div>
    
  )
}

export default Item
