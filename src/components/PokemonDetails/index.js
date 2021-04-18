const PokemonDetails = ({ data, loading }) => {
  return loading
    ? <div>Loading...</div>
    : <div>
      <div>{data.name}</div>
      <div>{data.abilities[0].ability.name}</div>
    </div>;
};

export default PokemonDetails;
