
import Categoria from './Categoria'
import './Inicio.css'
import OfertasBanner from './OfertasBanner'
import Productos from './Productos'

const Inicio = () => {

  return (
    <>
        <div className="banner__hero">
            <div className="banner__hero-img">
                <img src="./src/assets/bannerCrema.png" alt="" />
            </div> 
        </div>
        <div className="categorias">
            <h2>Categorías</h2>
            <div  className="container__categoria">
                <Categoria
                    imagen ="./src/assets/categoria4.jpg"
                    nombre ="limpiador"
                />
                <Categoria
                    imagen ="./src/assets/categoria2.jpg"
                    nombre ="hidratacion"
                />
                <Categoria
                    imagen ="./src/assets/categoria3.jpg"
                    nombre ="exfoliante"
                />
                <Categoria
                    imagen ="./src/assets/categoria1.jpg"
                    nombre ="bloqueador"
                />
            </div>
        </div>
        <div className="banners">
            <OfertasBanner 
                subtitulo= "New Collection" 
                parrafo = "Innovación y naturaleza" 
                boton = "Ver colección" 
                imagen = "./src/assets/OfertasBanner1.png" 
                bgColorBanner="#C7D1E0"
                bgColorButton= "#7089AF"
            />
            <OfertasBanner 
                subtitulo= "CyberNow -25%" 
                parrafo = "¡Descubre nuestras ofertas especiales!" 
                boton = "Comprar Ahora" 
                imagen = "./src/assets/OfertasBanner2.png"
                bgColorBanner="#CEC5CB"
                bgColorButton="#8C7786"
            />
        </div>
        <div>
            {/* <ProductosPopulares /> */}
        </div>
        <div className="populares">
            <h2>Productos Populares</h2>
            <div>
                <Productos/>
            </div>
        </div>
    </>
  )
}

export default Inicio
