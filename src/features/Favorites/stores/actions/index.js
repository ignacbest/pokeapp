export const ADD_FAVORITE_POKEMON = 'FAVORITE_ADD_FAVORITE_POKEMON';
export const REMOVE_FAVORITE_POKEMON = 'FAVORITE_REMOVE_FAVORITE_POKEMON';

export const addFavoritePokemon = (pokemon) => ({
  type: ADD_FAVORITE_POKEMON,
  payload: pokemon
});

export const deletePokemon = (pokemonId) => ({
  type: REMOVE_FAVORITE_POKEMON,
  payload: pokemonId
});
