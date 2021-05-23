import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import Header from './Header';
import './home.css';
import axios from 'axios';

const Home = () => {

    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

    const [error, setError] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);

    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        axios.get(url)
            .then( response => {
                    setIsLoaded(true);
                    setPokemons(response.data.results);
                    console.log(response.data.results);
                }
            )
            .catch( error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else {
        return (
            <>
                <Header/>
                <div className="App">
                    <div className="cards">
                        {pokemons.map((pokemon, index) => (
                            <Pokemon
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                                index={++index}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
        /*return(
            <div></div>
        )*/
    }
}

export default Home;