
import './ItemListContainer.css'

const categorias = [
    {
      id: 1,
      nombre: "Laptops",
      img: "/src/assets/laptop.png",
    },
    {
      id: 2,
      nombre: "Celulares",
      img: "/src/assets/tablet.png",
    },
    {
      id: 3,
      nombre: "Audifonos",
      img: "/src/assets/celulares.png",
    },
    {
      id: 4,
      nombre: "Tablets",
      img: "/src/assets/audifonos2.png"
    },
  ];

  function ItemListContainer({greetings}) {
    return (
      <>
        <div className="banner">
          <div className="banner__text">
            <h2>{greetings}</h2>
            <p>Explora nuestra amplia selección de productos tecnológicos de última generación.Aprovecha nuestras ofertas exclusivas y descubre por qué somos el destino preferido de los entusiastas de la tecnología.
            </p>
          </div>
          <img src="/src/assets/audifonos.png" alt="Audifonos" />
        </div>
        <div className="categorias">
          <h2>Categorias</h2>
          <div className="categorias__container">
          {categorias.map( categoria => (
                <div key={categoria.id} className="categoria__container" >
                    <img src={categoria.img} alt={categoria.nombre} />
                    <div className="categoria__texts">
                        <h3>{categoria.nombre}</h3>
                        <a href="#">Comprar</a>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default ItemListContainer