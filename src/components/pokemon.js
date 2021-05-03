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
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else{
        //console.log(imgUrl);
        return(
            <Link to = "/details">

                <div className="card" onClick={() => handleClick({pokemon})}>
                    <h1>{name}</h1>
                    <ul>
                        <li>Id: {pokemon.id}</li>
                        <li>Base experience: {pokemon.base_experience}</li>
                        <li>Height: {pokemon.height}</li>
                        <li>Weight: {pokemon.weight}</li>
                    </ul>
                    <img src={imgUrl} alt={name} width="300" height="300"/>
                </div>
            </Link>
      )
    }
}

export default Pokemon;