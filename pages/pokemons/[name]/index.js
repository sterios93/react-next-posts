import { useRouter } from 'next/router';
import PokemonDetails from '../../../src/components/PokemonDetails';
import { GET_POKEMON } from '../../../src/queries/pokemons';
import { useQuery } from '@apollo/client';

export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;

  const { data, loading } = useQuery(GET_POKEMON, { variables: { name } });
  const pokemon = data?.getPokemon;
  return <PokemonDetails data={pokemon} loading={loading} />;
}