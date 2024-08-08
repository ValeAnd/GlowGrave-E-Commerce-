import { useContext } from 'react'
import './Carrito.css'
import { CartContext } from '../../context/CartContext'
const Carrito = () => {

    const {carrito, precioTotal, handleVaciar} = useContext(CartContext);

  return (
    <div className="container__cart">
      <h1>Bolsa de compras</h1>
       {
        carrito.length > 0 ? (
            <>
                {
                    carrito.map((prod) => (
                        <div key={prod.id}>
                            <img src={prod.imagen} alt={prod.titulo}/>
                            <h2>{prod.titulo}</h2>
                            <h3>Precio unidad: {prod.precio}</h3>
                            <p>Cantidad:{prod.cantidad}</p>
                            <p>Precio: {prod.precio* prod.cantidad}</p>
                        </div>
                    ))
                }
                <h2>Precio total: {precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
            </>
        ) : (
            <p>Carrito Vacio</p>
        )
    }
    </div>
  )
} 

export default Carrito
