import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Pokemon({name, url, index}){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemon, setPokemon] = useState({});

    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;

    const handleClick = (pokeName) => {
        console.log(`you clicked on ${pokeName.pokemon.name}`);

    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPokemon(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }            
            )
    }, [url]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else{
        console.log(pokemon.types);
        return(
            <Link className="cardLink" to = "/details">

                <div className="card" onClick={() => handleClick({pokemon})}>
                    <p>Base_xp: {pokemon.base_experience}</p>
                    <img src={imgUrl} alt={name} width="200" height="200"/>
                    <h1>{name}</h1>
                    <p>{pokemon.id}</p>
                    <ul>
                        <li>Height: {pokemon.height}</li>
                        <li>Type: </li>
                        <li>Weight: {pokemon.weight}</li>
                    </ul>
                </div>
            </Link>
      )
    }
}

export default Pokemon;