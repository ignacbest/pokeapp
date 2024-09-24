export const ADD_FAVORITE_POKEMON = 'FAVORITE_ADD_FAVORITE_POKEMON';
export const DO_REMOVE_FAVORITE_POKEMON = 'FAVORITE_DO_REMOVE_FAVORITE_POKEMON';
export const REMOVE_FAVORITE_POKEMON = 'FAVORITE_REMOVE_FAVORITE_POKEMON';
export const SET_IS_LOADING = 'FAVORITE_SET_IS_LOADING';

export const addFavoritePokemon = (pokemon) => ({
  type: ADD_FAVORITE_POKEMON,
  payload: pokemon
});

export const doDeletePokemon = (pokemonId) => ({
  type: DO_REMOVE_FAVORITE_POKEMON,
  payload: pokemonId
});

export const deletePokemon = (pokemonId) => ({
  type: REMOVE_FAVORITE_POKEMON,
  payload: pokemonId
});

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading
});
