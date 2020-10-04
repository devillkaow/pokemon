import React, { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((apiResponse) => setPokemon(apiResponse.results))
      .finally(setLoading(false));
  }, []);

  return (
    <>
      {!isLoading && (
        <ul>
          {pokemon.map((list) => (
            <div>
              {list.url}
              {list.name}
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default Pokemon;