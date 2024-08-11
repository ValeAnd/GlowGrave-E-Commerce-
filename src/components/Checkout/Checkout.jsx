import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import './Checkout.css'

const Checkout = () => {
  const [pedido, setPedido] = useState();
  const {carrito, precioTotal,handleVaciar} = useContext(CartContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const comprar = (data) => {
    if (data.correo !== data.correoConfirmado) {
      alert("Los correos electrónicos no coinciden");
      return;
    }

    const pedido = {
      cliente: data,
      date : new Date(),
      productos: carrito,
      total: precioTotal()
    };
    const pedidosRef = collection( db , "pedidos");

    addDoc(pedidosRef, pedido)
      .then((doc) => {
          setPedido(doc.id);
          handleVaciar();
      })
  };

  if(pedido){
    return (
      <div className= "order">
        <div>Muchas gracias por tu compre</div>
        <p>tu numero de pedido es {pedido}</p>
      </div>
    )
  }


  return (
    <div className="order">
      <h1>Orden de compra</h1>
      <h3>Detalles de facturación</h3>
      <div className="order__container">
        <form onSubmit={handleSubmit(comprar)}>
          <div className="order__data">
            <div className="input__container">
              <label htmlFor="nombres">Nombres:</label>
              <input type="text" {...register("nombre", { required: "Este campo es requerido" })}/>
              {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>
            <div className="input__container">
              <label htmlFor="apellidos">Apellidos:</label>
              <input type="text" {...register("apellidos", { required: "Este campo es requerido" })}/>
              {errors.apellidos && <span>{errors.apellidos.message}</span>}
            </div>
            <div className="input__container">
              <label htmlFor="telefono">Teléfono:</label>
              <input type="phone" {...register("telefono", { required: "Este campo es requerido" })}/>
              {errors.telefono && <span>{errors.telefono.message}</span>}
            </div>
            <div className="input__container">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" {...register("correo", { required: "Este campo es requerido" })}/>
              {errors.correo && <span>{errors.correo.message}</span>}
            </div>
            <div className="input__container">
              <label htmlFor="emailtwo">Confirmar correo electrónico:</label>
              <input 
                type="email" 
                {...register("correoConfirmado", { required: "Este campo es requerido" })}
              />
              {errors.correoConfirmado && <span>{errors.correoConfirmado.message}</span>}
            </div>
          </div>
          <button className="button__confirm" type="submit">Comprar</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
