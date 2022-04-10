function CardRazasPerros(props) {
    return (
      <li className="breedCard">
        <div className="contenedorImagen">
          <img src={props.imagen} alt={props.nombreRaza} />
        </div>
        <span className="breedTitle">{props.nombreRaza}</span>
        <ul className="reactions">
          <li>
            <div>
              <i className="fa-solid fa-heart"></i>
              <span>450</span>
            </div>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-comment"></i>
              <span>1.1k</span>
            </div>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-eye"></i>
              <span>850</span>
            </div>
          </li>
        </ul>
      </li>
    )
  }

  export default CardRazasPerros;