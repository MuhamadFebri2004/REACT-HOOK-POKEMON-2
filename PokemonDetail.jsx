import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonDetail = () => {
  const { id } = useParams();
  const { state } = useContext(PokemonContext);
  const pokemon = state.pokemons.find(p => p.id === parseInt(id));

  if (!pokemon) return <div className="p-4">Pokémon not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{pokemon.name}</h1>
      <p>Type: {pokemon.type}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p>
    </div>
  );
};

export default PokemonDetail;
