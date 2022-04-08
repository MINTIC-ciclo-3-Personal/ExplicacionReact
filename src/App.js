import logo from './logo.svg';
import './styles/estilos.css';
import borderCollie from './media/border_collie.jpg';
import rhodesianRidgeback from './media/rhodesian.jpg';

function App() {
  return (
    <div classNameName="App">
      <header>
        <ul className="navbar">
          <li>
            <img src="./media/perrologo.jpg" alt="Logo perro" className="logo" />
          </li>
          <li>
            <div>
              <button className="button mainButton">
                <i className="fa-solid fa-plus"></i> Nuevo post</button>
            </div>

          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar una raza" type="text" />
              <i className="fas fa-search button iconoBusqueda"></i>
            </div>
          </li>
          <li><button className="button secondaryButton">Login</button></li>
          <li><button className="button mainButton">Registro</button></li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={borderCollie} alt="Border Collie" />
              </div>
              <span className="breedTitle">Border Collie</span>
              <ul className="reactions">
                <li>
                  <div>
                    <i className="fa-solid fa-heart"></i>
                    <span>150</span>
                  </div>
                </li>
                <li>
                  <div>
                    <i className="fa-solid fa-comment"></i>
                    <span>1.5k</span>
                  </div>
                </li>
                <li>
                  <div>
                    <i className="fa-solid fa-eye"></i>
                    <span>120</span>
                  </div>
                </li>
              </ul>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={rhodesianRidgeback} alt="Rhodesian RidgeBack" />
              </div>
              <span className="breedTitle">Rhodesian Ridgeback</span>
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
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>

    </div>
  );
}

export default App;
