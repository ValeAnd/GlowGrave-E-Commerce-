
const productos = [
    {
      id: 1,
      titulo: "Limpiador Facial Suave",
      precio: 15.99,
      descripcion: "Gel limpiador facial suave para pieles sensibles. Limpia profundamente sin resecar la piel.",
      stock: 25,
      imagen: "https://www.lecoreane.com/cdn/shop/products/01_f640333f-2c77-4a10-8ed7-c5528e97ac98.png?v=1678656521&width=493",
      categoria: "limpiador"
    },
    {
      id: 2,
      titulo: "Crema Hidratante de Día",
      precio: 19.99,
      descripcion: "Crema hidratante ligera para el día. Proporciona hidratación intensa y protección UV.",
      stock: 30,
      imagen: "https://www.lecoreane.com/cdn/shop/products/X_25899.png?v=1678658759&width=493",
      categoria: "hidratacion"
    },
    {
      id: 3,
      titulo: "Exfoliante Facial de Granos Naturales",
      precio: 12.5,
      descripcion: "Exfoliante facial suave con granos naturales. Elimina células muertas y deja la piel suave y radiante.",
      stock: 20,
      imagen: "https://www.lecoreane.com/cdn/shop/files/Probio-CicaEnrichCream.png?v=1713427955&width=493",
      categoria: "exfoliante"
    },
    {
      id: 4,
      titulo: "Bloqueador Solar SPF 50",
      precio: 22.99,
      descripcion: "Bloqueador solar de amplio espectro SPF 50. Protege contra los rayos UVA y UVB durante todo el día.",
      stock: 15,
      imagen: "https://www.lecoreane.com/cdn/shop/products/01_ea4cbb14-2d2b-4eaf-b682-d3417fee7475.png?v=1678657175&width=493",
      categoria: "bloqueador"
    },
    {
      id: 5,
      titulo: "Gel Limpiador Refrescante",
      precio: 18.5,
      descripcion: "Gel limpiador refrescante para todo tipo de piel. Elimina impurezas y deja la piel limpia y fresca.",
      stock: 18,
      imagen: "https://www.lecoreane.com/cdn/shop/files/KahiSeoulAntiWrinkleMultiBalm.png?v=1695216997&width=493",
      categoria: "limpiador"
    },
    {
      id: 6,
      titulo: "Mascarilla Hidratante de Noche",
      precio: 25.0,
      descripcion: "Mascarilla hidratante intensiva de noche. Restaura la hidratación durante el sueño para una piel radiante al despertar.",
      stock: 22,
      imagen: "https://www.lecoreane.com/cdn/shop/files/00_22142910-e2f1-4c13-954d-43c7b1c67e8f.png?v=1701414233&width=493",
      categoria: "hidratacion"
    },
    {
      id: 7,
      titulo: "Exfoliante Facial Suave",
      precio: 14.75,
      descripcion: "Exfoliante facial suave para uso diario. Elimina impurezas y células muertas sin irritar la piel.",
      stock: 28,
      imagen: "https://www.lecoreane.com/cdn/shop/products/X_80734.png?v=1719846283&width=493",
      categoria: "exfoliante"
    },
    {
      id: 8,
      titulo: "Crema Solar Facial SPF 30",
      precio: 21.99,
      descripcion: "Crema solar facial SPF 30 con antioxidantes. Protege la piel y previene el envejecimiento prematuro.",
      stock: 17,
      imagen: "https://www.lecoreane.com/cdn/shop/products/01_ff4e025e-a400-41e4-a206-302b358cb810.png?v=1678656888&width=493",
      categoria: "bloqueador"
    },
    {
      id: 9,
      titulo: "Agua Micelar Desmaquillante",
      precio: 16.5,
      descripcion: "Agua micelar desmaquillante para una limpieza efectiva sin enjuague. Adecuado para piel sensible.",
      stock: 24,
      imagen: "https://www.lecoreane.com/cdn/shop/files/4_07c69179-215a-4443-bf90-7c3e869698f6.png?v=1701000105&width=493",
      categoria: "limpiador facial"
    },
    {
      id: 10,
      titulo: "Serum Hidratante Intensivo",
      precio: 29.99,
      descripcion: "Serum hidratante intensivo con ácido hialurónico. Hidratación profunda y duradera para la piel seca.",
      stock: 12,
      imagen: "https://www.lecoreane.com/cdn/shop/products/X_emulsion7094.jpg?v=1678658204&width=493",
      categoria: "hidratación"
    },
    {
      id: 11,
      titulo: "Exfoliante Corporal de Sal Marina",
      precio: 11.0,
      descripcion: "Exfoliante corporal de sal marina con aceites esenciales. Deja la piel suave y renovada.",
      stock: 19,
      imagen: "https://www.lecoreane.com/cdn/shop/files/37.png?v=1696600286&width=493",
      categoria: "exfoliante"
    },
    {
      id: 12,
      titulo: "Crema Facial Antiarrugas SPF 50",
      precio: 24.5,
      descripcion: "Crema facial antiarrugas con protección solar SPF 50. Reduce las arrugas y protege contra el daño solar.",
      stock: 16,
      imagen: "https://www.lecoreane.com/cdn/shop/files/Hyalu-cicaSilky-fitSunStick.png?v=1713427923&width=493",
      categoria: "bloqueador"
    },
    {
      id: 13,
      titulo: "Gel Limpiador Matificante",
      precio: 17.99,
      descripcion: "Gel limpiador matificante para piel grasa. Controla el exceso de grasa y previene el brillo indeseado.",
      stock: 23,
      imagen: "https://www.lecoreane.com/cdn/shop/files/8_06017250-fddb-41a4-b9dc-bbe5bc85014b.png?v=1719846791&width=493",
      categoria: "limpiador"
    },
    {
      id: 14,
      titulo: "Crema Nutritiva de Noche",
      precio: 26.0,
      descripcion: "Crema nutritiva de noche para una hidratación intensa y regeneración celular mientras duermes.",
      stock: 21,
      imagen: "https://belcorpperu.vtexassets.com/arquivos/ids/263222-1600-auto?v=638242504756700000&width=1600&height=auto&aspect=true",
      categoria: "hidratacion"
    },
    {
      id: 15,
      titulo: "Mascarilla Exfoliante de Carbón",
      precio: 13.75,
      descripcion: "Mascarilla exfoliante de carbón activo para una limpieza profunda de poros. Aporta luminosidad a la piel.",
      stock: 27,
      imagen: "https://www.lecoreane.com/cdn/shop/files/7_ae59f7d3-e644-4083-ad44-fed16250e887.png?v=1719847047&width=493",
      categoria: "exfoliante"
    },
    {
      id: 16,
      titulo: "Protector Solar Mineral SPF 50+",
      precio: 28.99,
      descripcion: "Protector solar mineral SPF 50+ con óxido de zinc. Fórmula no irritante para pieles sensibles.",
      stock: 14,
      imagen: "https://www.lecoreane.com/cdn/shop/products/X_25899.png?v=1678658759&width=493",
      categoria: "bloqueador"
    },
    {
      id: 17,
      titulo: "Agua Micelar Todo en Uno",
      precio: 15.5,
      descripcion: "Agua micelar todo en uno para limpieza y tonificación facial sin enjuague. Apto para todo tipo de piel.",
      stock: 26,
      imagen: "https://www.lecoreane.com/cdn/shop/files/4_07c69179-215a-4443-bf90-7c3e869698f6.png?v=1701000105&width=493",
      categoria: "limpiador"
    },
    {
      id: 18,
      titulo: "Crema de Manos Hidratante",
      precio: 10.99,
      descripcion: "Crema de manos hidratante con extracto de aloe vera. Nutre y protege la piel de las manos.",
      stock: 29,
      imagen: "https://www.lecoreane.com/cdn/shop/files/12_8ecafc38-10cb-42e0-92f0-b039966afa5e.png?v=1719847457&width=493",
      categoria: "hidratacion"
    },
    {
      id: 19,
      titulo: "Exfoliante Facial Iluminador",
      precio: 12.99,
      descripcion: "Exfoliante facial iluminador con extracto de vitamina C. Revitaliza la piel y mejora el tono facial.",
      stock: 18,
      imagen: "https://www.lecoreane.com/cdn/shop/files/6_211db4bf-edae-40ba-bb32-8174651dc715.png?v=1719846523&width=493",
      categoria: "exfoliante"
    },
    {
      id: 20,
      titulo: "Crema Solar Facial Anti-Edad SPF 30",
      precio: 23.5,
      descripcion: "Crema solar facial anti-edad SPF 30. Previene y reduce los signos de envejecimiento causados por el sol.",
      stock: 20,
      imagen: "https://www.lecoreane.com/cdn/shop/files/CicaEyePatch.png?v=1708224990&width=493",
      categoria: "bloqueador"
    }
  ]
  
export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 500);
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = productos.find((el) => el.id === id);
        if(item){
          resolve(item);
        }
        else{
          reject({
            error:("Producto no encontrado")
          })
        }
    })
}

export const obtenerProductosRandom = (cantidad) => {
    let productosAlAzar = [];
    const productosCopia = [...productos];

    for(let i=0 ; i<cantidad; i++){
      if(productosCopia.length === 0) 
        break;
      const indiceAleatorio = Math.floor(Math.random() * productosCopia.length);
      productosAlAzar.push(productosCopia[indiceAleatorio]);
      productosCopia.splice(indiceAleatorio, 1);
    }
    return productosAlAzar;
}