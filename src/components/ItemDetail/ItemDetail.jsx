import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import RandomProducts from './RandomProducts';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const { handleAgregar } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad  > 1 && setCantidad (cantidad  - 1);
  };


  return (
    <div className="container__detail">
      <div className='detail__product'>
        <img src={item.imagen} alt={item.titulo} />
        <div className="detail__text">
          <div className="detail__texts">
            <p className="text__marca">GlowGrave</p>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <h4>S/{item.precio} PEN</h4>
          </div>
          <div className="buttons">
            <ItemCount
              cantidad={cantidad }
              handleSumar={handleSumar}
              handleRestar={handleRestar}              
            />
            <button className="button__agregar" onClick={() => { handleAgregar(item,cantidad) }}>Agregar al Carrito</button>
          </div>
        </div>
      </div>
      {/* <RandomProducts cantidad={4} /> */}
    </div>
  );
};

export default ItemDetail;
