
import './Inicio.css'

const Categoria = (props) => {
  return (
    <div className="categoria">
      <img src={props.imagen} alt={props.nombre} />
      <p>{props.nombre}</p>
    </div>
  )
}

export default Categoria
