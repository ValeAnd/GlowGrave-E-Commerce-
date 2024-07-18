import Categoria from './Categoria'
import './Inicio.css'

const Inicio = () => {

  return (
    <>
        <div className="banner">
            <div className="banner__image">
                <img src="./src/assets/bannerCrema.png" alt="" />
            </div> 
        </div>
        <div className="categorias">
            <h2>Categorias</h2>
            <div  className="container__categoria">
                <Categoria
                    imagen ="./src/assets/categoria4.jpg"
                    nombre ="Limpieza facial"
                />
                <Categoria
                    imagen ="./src/assets/categoria2.jpg"
                    nombre ="Hidratación"
                />
                <Categoria
                    imagen ="./src/assets/categoria3.jpg"
                    nombre ="Exfoliante"
                />
                <Categoria
                    imagen ="./src/assets/categoria1.jpg"
                    nombre ="Bloqueador Solar"
                />
            </div>
        </div>
    </>
  )
}

export default Inicio
