
const OfertasBanner = ({ subtitulo, parrafo, boton, imagen, bgColorBanner, bgColorButton }) => {

    const backgroundColorBanner = {
        backgroundColor: bgColorBanner,
    };

    const backgroundColorButton = {
        '--hover-bg-color': bgColorButton,
    }

  return (
    <div className="banner__container" style={backgroundColorBanner}>
        <div className="banner__content">
            <div className="banner__texts">
                <h3>{subtitulo}</h3>
                <p>{parrafo}</p>
            </div>
            <button className="banner__button" style={backgroundColorButton}>
                {boton}
            </button>
        </div>
        <div className="banner__img">
            <img src={imagen} alt={subtitulo} />
        </div>
    </div>
  )
}

export default OfertasBanner