import {useEffect, useState} from 'react';

function Pokemon({name, url, index}){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemon, setPokemon] = useState({});

    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;

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
        console.log(imgUrl);
        return(
            <div>
                <h1>{name}</h1>
                <ul>
                    <li>{pokemon.id}</li>
                    <li>{pokemon.base_experience}</li>
                    <li>{pokemon.height}</li>
                    <li>{pokemon.weight}</li>
                </ul>
                <img src={imgUrl} alt={name} width="300" height="300"/>
            </div>
      )
    }
}

export default Pokemon;