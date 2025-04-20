import { Link } from 'react-router-dom';

const PokemonCard = ({ data }) => {
  return (
    <Link to={`/pokemon/${data.id}`} className="border rounded p-4 shadow hover:shadow-md">
      <h2 className="text-xl font-semibold">{data.name}</h2>
      <p className="text-sm">Type: {data.type}</p>
    </Link>
  );
};

export default PokemonCard;
