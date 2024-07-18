import { LuShoppingCart } from "react-icons/lu";
import './CardWidget.css';

function CardWidget({ cartCount }) {
    return (
      <a href="#">
        <LuShoppingCart size={22} />
        {cartCount}
      </a>
    );
  }
  
  export default CardWidget