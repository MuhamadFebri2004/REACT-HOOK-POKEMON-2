import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const FilterInput = () => {
  const { dispatch } = useContext(PokemonContext);

  return (
    <input
      type="text"
      placeholder="Filter Pokémon"
      onChange={(e) => dispatch({ type: 'SET_FILTER', payload: e.target.value })}
      className="border px-2 py-1 rounded"
    />
  );
};

export default FilterInput;

// src/index.css
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f0f0f0;
}

input:focus, button:focus {
  outline: none;
}
