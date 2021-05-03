import { useEffect, useState } from 'react';
import Pokemon from './components/pokemon'

function App() {

  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPokemons(result.results);
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
    return (
      <div className="App">
        {pokemons.map((pokemon, index) => (
          <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            index={++index}
          />
        ))}
      </div>
    );
  }
}

export default App;
