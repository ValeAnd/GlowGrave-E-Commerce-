import './ItemDetail.css'

const ItemDetail = ({item}) => {
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
              <div className="detail__count">
                  <button>+</button>
                  <p>01</p>
                  <button>-</button>
              </div>
              <button className="button__agregar">Agregar al Carrito</button>
            </div>
        </div>
        
      </div>
    </div>

  )
}

export default ItemDetail
