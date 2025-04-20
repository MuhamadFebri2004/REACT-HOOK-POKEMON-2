import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const ViewToggle = () => {
  const { state, dispatch } = useContext(PokemonContext);

  return (
    <button
      onClick={() => dispatch({ type: 'SET_VIEW', payload: state.view === 'grid' ? 'list' : 'grid' })}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Switch to {state.view === 'grid' ? 'List' : 'Grid'} View
    </button>
  );
};

export default ViewToggle;
