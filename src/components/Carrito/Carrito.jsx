import { useContext } from 'react'
import './Carrito.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css';

const Carrito = () => {
    const {carrito, precioTotal, handleVaciar} = useContext(CartContext);
    const vaciarCarrito = () => {
        handleVaciar();
        Toastify({
            text: `Se vacio el carrito`,
            duration: 1000, 
            gravity: "top", 
            position: "right", 
            backgroundColor: "#4CAF50", 
            stopOnFocus: true 
          }).showToast();
    }
  return (
    <div className="container__cart">
        <div className="container__title">
          <img src="/src/assets/flower.png" alt="" />
          <h1 className="title__category">Bolsa de compras</h1>
          <img src="/src/assets/flower2.png" alt="" />
        </div>
      <h1>Bolsa de compras</h1>
       {
        carrito.length > 0 ? (
            <>
                
                <div className="cart__sections">
                    <div className="cart__products">
                        <div className="cart__subtitles">
                            <ul className="subtitles__list">
                                <li>Titulo</li>
                                <li>Cantidad</li>
                                <li>Precio</li>
                                <li>Total</li>
                            </ul>
                        </div>
                    {
                        carrito.map((prod) => (
                            <div key={prod.id} className="cart__product">
                                <img src={prod.imagen} alt={prod.titulo} className="cart__img"/>
                                <h2 className="cart__title">{prod.titulo} </h2>
                                <p className="cart__count">{prod.cantidad} </p>
                                <h3 className="cart__price">S/{prod.precio} </h3>
                                <p className="cart__prices">S/{prod.precio* prod.cantidad} </p>
                            </div>
                        ))
                    }
                    </div>
                    <div className="cart__total">
                        <h3>Resumen</h3>
                        <div className="cart__summary">
                            <div className="summary__text">
                                <p className="text__subtitle">Subtotal:</p>
                                <p className="text__mount">S/{precioTotal()}</p>
                            </div>
                            <div className="summary__text">
                                <p className="text__subtitle">Descuentos:</p>
                                <p className="text__mount">S/0</p>
                            </div>
                            <div className="summary__text">
                                <p className="text__subtitle">Precio total:</p>
                                <p className="text__mount">S/{precioTotal()}</p>
                            </div>
                        </div>
                        <div className="cart__buttons">
                            <button onClick={vaciarCarrito} className="button__empty">Vaciar</button>
                            <Link to="/orden"><button className="button__buy">Continuar</button></Link>
                        </div>
                    </div>
                </div>
                
            </>
        ) : (
            <p className="cart__empty">Carrito Vacio</p>
        )
    }
    </div>
  )
} 

export default Carrito
