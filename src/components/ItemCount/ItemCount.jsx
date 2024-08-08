
const ItemCount = ({cantidad, handleRestar, handleSumar}) => {
  return (
    <>
    <div className="detail__count">
        <button onClick={handleRestar}>
            -
        </button>
        <span>{cantidad}</span>
        <button onClick={handleSumar}>
            +
        </button>
    </div>
    </>
  )
}

export default ItemCount
