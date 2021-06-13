import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import Header from "./Header";

import "./home.css";

const Home = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const [error, setError] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);

  const [pokemons, setPokemons] = useState([]);

  const [searched, setSearched] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setIsLoaded(true);
        setPokemons(response.data.results);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    //console.log(searched);
    return (
      <>
        <Header changeSearch={(searched) => setSearched(searched)} />
        <div className="App">
          <div className="cards">
            {searched === "" ? (
              pokemons.map((pokemon, index) => (
                <Pokemon
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  index={++index}
                />
              ))
            ) : (
                
                pokemons.filter( pokemon => (
                  pokemon.name.includes(searched.toLowerCase())
                )).map(pokemon => (
                    
                <Pokemon
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  index={pokemon.url.split('/')[6]} 
                />
                ))
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Home;
