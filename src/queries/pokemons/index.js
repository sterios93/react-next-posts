import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query getPokemons {
    getPokemons
    @rest(
      path: "/pokemon",
      method: "GET",
    )
    {
      results
    }
  }
`;


export const GET_POKEMON = gql`
query getPokemon($name: String!){
  getPokemon(name: $name)
  @rest (
    path: "/pokemon/{args.name}",
    method: "GET",
  )
  {
    name
    abilities
  }
}
`;
