export const pokemonList = [
  { id: 1, name: 'Pikachu', type: 'Electric', hp: 35, attack: 55, defense: 40 },
  { id: 2, name: 'Bulbasaur', type: 'Grass', hp: 45, attack: 49, defense: 49 },
  { id: 3, name: 'Charmander', type: 'Fire', hp: 39, attack: 52, defense: 43 },
  { id: 4, name: 'Squirtle', type: 'Water', hp: 44, attack: 48, defense: 65 },
];

// src/pages/Home.jsx
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import PokemonCard from '../components/PokemonCard';
import ViewToggle from '../components/ViewToggle';
import FilterInput from '../components/FilterInput';

const Home = () => {
  const { state } = useContext(PokemonContext);
  const filtered = state.pokemons.filter(p =>
    p.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <FilterInput />
        <ViewToggle />
      </div>
      <div className={`grid gap-4 ${state.view === 'grid' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {filtered.map(pokemon => (
          <PokemonCard key={pokemon.id} data={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
