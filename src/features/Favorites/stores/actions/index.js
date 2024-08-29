export const ADD_FAVORITE_POKEMON = 'FAVORITE_ADD_FAVORITE_POKEMON';

export const addFavoritePokemon = (pokemon) => ({
  type: ADD_FAVORITE_POKEMON,
  payload: pokemon
});