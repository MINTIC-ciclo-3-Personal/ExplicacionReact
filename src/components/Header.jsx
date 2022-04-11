import logoPagina from 'media/perrologo.jpg';

const Header =()=> {
    return (
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
    )
}

export default Header;

/* const variableNumerica=3;
const variableTexto="esto es un texto";
const variableArray= [1,2,3,4,5];
const variableObjeto={
    llave1:"valor1",
    llave2:"valor2",
    llave3:"valor3",
};
const listaObjetos=[
    {
        llave1:"valor1",
        llave2:"valor2",
        llave3:"valor3",
    },
    {
        llave1:"valor1",
        llave2:"valor2",
        llave3:"valor3",
    },
    {
        llave1:"valor1",
        llave2:"valor2",
        llave3:"valor3",
    },
]

const nombreFunction=(in1,in2,in3)=>{
    return "retorno de la funcion";
};

function nombreFuncion (in1,in2,in3){
    return "retorno de la funcion";
} */