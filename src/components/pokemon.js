import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import React from 'react';

const Pokemon = ({name, url, index}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
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
                    setIsLoaded(false);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }            
            )
    }, [url]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (isLoaded) {
        return <div>Loading...</div>
    }
    else{
        const {types} = pokemon;
        /*const slot = types.map((element, index) => {
            if(index==0){
                return element;
            }
        })*/

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
                    <p></p>
                </div>
            </Link>
      )
    }
}

export default Pokemon;