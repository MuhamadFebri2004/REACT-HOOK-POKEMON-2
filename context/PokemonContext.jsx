import { createContext, useReducer, useEffect } from 'react';
import { pokemonReducer } from './pokemonReducer';
import { pokemonList } from '../data/pokemonData';

const PokemonContext = createContext();

const initialState = {
  pokemons: [],
  filter: '',
  view: 'grid',
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState, (init) => {
    const stored = localStorage.getItem('pokemonState');
    return stored ? JSON.parse(stored) : { ...init, pokemons: pokemonList };
  });

  useEffect(() => {
    localStorage.setItem('pokemonState', JSON.stringify(state));
  }, [state]);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
