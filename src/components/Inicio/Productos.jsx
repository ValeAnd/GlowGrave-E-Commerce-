import { useEffect , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Inicio.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link} from 'react-router-dom';
const Productos = () => {

    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
        const obtenerProductos = async () => {
            const categorias = ["limpieza", "hidratacion", "exfoliante", "bloqueador"];
            let productosPopulares = [];

            for(const categoria of categorias){
                const productosRef = collection(db, "productos");
                const consulta = query(productosRef, where("categoria", "==", categoria));
                const querySnapshot = await getDocs(consulta);

                const productosDeCategoria = querySnapshot.docs
                    .map((doc) => ({
                        ...doc.data() , id: doc.id
                    }))
                    .slice(0,2);
                productosPopulares = [...productosPopulares, ...productosDeCategoria]
            }
            setProductos(productosPopulares);
            
        }
        obtenerProductos();
    }, []);
 
    return (
        <>
        {productos.length >0 && (
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay = {{
              delay: 1500,
            }}
            navigation={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 80,
              },
             
            }}
            modules={[ Navigation, Autoplay]}
            className="mySwiper"
          >
            
            {
              productos.map((producto) => (
              <SwiperSlide key={producto.id}>
                <div className="container__product">
                  <Link to={`/item/${producto.id}`} className="container__img">
                    <img src={producto.imagen} alt="" />
                  </Link>
                  <h3>{producto.titulo}</h3>
                  <h4>S/{producto.precio}</h4>
                </div>
              </SwiperSlide> )  
              )
            }
          </Swiper>
          
          )}
        </>
      );
}

export default Productos
