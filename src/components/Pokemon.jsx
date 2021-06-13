import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";

import { yourColor, pickIcon } from "../utilities";

const Pokemon = ({ name, url, index }) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;

  const handleClick = (pokeName) => {
    console.log(`you clicked on ${pokeName.pokemon.name}`);
  };
  
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPokemon(response);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [url]);

  if (error) {
    return (<div>Error</div>);
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const types = pokemon.data.types;
    const [first] = types;
    const type = first.type.name;

    return (
      <Link className="cardLink" to="/details">
        <div
          className="card"
          onClick={() => handleClick({ pokemon })}
          style={{ background: yourColor(type) }}
        >
        
          <div className='name_and_icon'>
            <h1>{name[0].toUpperCase()+name.slice(1)}</h1>
            <img className="icone" src= {pickIcon(type)} alt='icone' width='20' height='20'/>  
          </div>
          <img className='pokemon' src={imgUrl} alt={name} width="100" height="100" />
          <p>#{pokemon.data.id}</p>
          <div id="someSpecs">
            <div className='spec'>Height: {pokemon.data.height}</div>
            <div className='spec'>Weight: {pokemon.data.weight}</div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Pokemon;
