import CardRazasPerros from 'components/CardRazaPerros';
import 'styles/estilos.css';
import borderCollie from 'media/border_collie.jpg';
import rhodesianRidgeback from 'media/rhodesian.jpg';
import logoPagina from 'media/perrologo.jpg';

function App() {
  return (
    <div classNameName="App">
      <header>
        <ul className="navbar">
          <li>
            <img src={logoPagina} alt="Logo perro" className="logo" />
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
            <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie}/>
            <CardRazasPerros nombreRaza="Rhodesian Ridgeback" imagen={rhodesianRidgeback}/>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>

    </div>
  );
}

export default App;
