import { useEffect, useState } from "react"
import { obtenerProductosRandom } from "../../asyncMock";
import { Link } from "react-router-dom";
import '../Item/Item.css'

const RandomProducts = ({cantidad}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const productosAlAzar = obtenerProductosRandom(cantidad);
        setItem(productosAlAzar);
    }, [cantidad])
    
  return (
    <div className="random__container">
        <h2>Productos Recomendados</h2>
        <div className="random__products">
        {item.map((item) => (
            <div key={item.id} className="container__product">
                <img src={item.imagen} alt={item.titulo} />
                <h3>{item.titulo}</h3>
                <h4>S/{item.precio}</h4>
                <Link to={`/item/${item.id}`} className="button__link"><button>Ver Mas</button></Link>
            </div>
        ))}
    </div>
  </div>
  )
}

export default RandomProducts
