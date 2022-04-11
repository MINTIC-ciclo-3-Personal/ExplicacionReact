import CardRazasPerros from "components/CardRazaPerros"
import borderCollie from 'media/border_collie.jpg';
import rhodesianRidgeback from 'media/rhodesian.jpg';


function Index() {
    return (
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie} />
                <CardRazasPerros nombreRaza="Rhodesian Ridgeback" imagen={rhodesianRidgeback} />
            </ul>
        </section>
    )
}
export default Index;