

function CardWidget({ cartCount }) {
    return (
      <a href="#">
        <img src='/src/assets/icon-cart.svg' alt="" />
        {cartCount}
      </a>
    );
  }
  
  export default CardWidget