import { LuShoppingCart } from "react-icons/lu";
import './CardWidget.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CardWidget() {

  const { cantidadCarrito } = useContext(CartContext)

    return (
      <Link to="/carrito">
        <LuShoppingCart size={22} />
        <span>{cantidadCarrito()}</span>
      </Link>
    );
  }
  
  export default CardWidget