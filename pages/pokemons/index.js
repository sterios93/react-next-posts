import { useQuery } from '@apollo/client';
import PokemonList from '../../src/components/PokemonList';
import { GET_POKEMONS } from '../../src/queries/pokemons';

function Pokemons() {
  const { data, loading } = useQuery(GET_POKEMONS);
  const pokemons = data?.getPokemons?.results;

  return <PokemonList data={pokemons} loading={loading} />;
}

export default Pokemons;
