import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    //Children nos permite que otros componentes accedan a los valores y funciones
    // proporcionados por el contexto

    const[carrito, setCarrito] = useState(carritoInicial);

    const handleAgregar = (item,cantidad) => {
        const itemAgregado = { ...item, cantidad  }; //Agregamos una nueva propiedad "cantidad"
        const nuevoCarrito = [...carrito]; //Actualizar el carrito
        const existeEnCarrito = carrito.find((producto) => producto.id === itemAgregado.id);

        if (existeEnCarrito) {
        existeEnCarrito.cantidad  += cantidad ;
        } else {
        nuevoCarrito.push(itemAgregado);
        }

        setCarrito(nuevoCarrito )
    };


    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad , 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad*prod.precio,0)
    }

    const handleVaciar = () => {
        return setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    },[carrito]);

    return (
        <CartContext.Provider value={ {carrito, handleAgregar, cantidadCarrito, precioTotal, handleVaciar} }>
            {children}
        </CartContext.Provider>
    )
}