import Link from 'next/link';

const PokemonList = ({ data, loading }) =>
  loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div>Pokemons List</div>
      <ul>
        {data.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/pokemons/${pokemon.name}`}>
              <a>{pokemon.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

export default PokemonList;
