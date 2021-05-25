import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import React from 'react';
import { yourColor } from '../utilities';

const Pokemon = ({name, url, index}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemon, setPokemon] = useState({});
    //const pokemon = React.useRef(null);
    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;

    const handleClick = (pokeName) => {
        console.log(`you clicked on ${pokeName.pokemon.name}`);
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(
                (result) => {
                    //setIsLoaded(true);
                    setPokemon(result);
                    //pokemon.current = result;
                    setIsLoaded(true);
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
        const types = pokemon.types;
        const [ first ] = types;
        const type = first.type.name;

        return(
            <Link className="cardLink" to = "/details">

                <div className="card" onClick={() => handleClick({pokemon})} style={{background: yourColor(type)}} >
                    <p>Base_xp: {pokemon.base_experience}</p>
                    <img src={imgUrl} alt={name} width="200" height="200"/>
                    <h2>{name}</h2>
                    <p>#{pokemon.id}</p>
                    <ul>
                        <li>Height: {pokemon.height}</li>
                        <li>Type: {type}</li>
                        <li>Weight: {pokemon.weight}</li>
                    </ul>
                </div>
            </Link>
      )
    }
}

export default Pokemon;