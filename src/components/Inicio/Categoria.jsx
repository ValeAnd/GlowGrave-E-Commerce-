
import { useNavigate } from 'react-router-dom';
import './Inicio.css'

const Categoria = ({ imagen, nombre }) => {
  const navigate = useNavigate(); // Con ello rederigimos al usuario a una nueva URL

  const handleClick = () => {
      navigate(`/productos/${nombre}`);
  }

  return (
      <div className="categoria" onClick={handleClick}>
          <img src={imagen} alt={nombre} />
          <h3>{nombre}</h3>
      </div>
  );
}

export default Categoria
