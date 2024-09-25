export const LOAD_POKEMON = 'HOME_LOAD_POKEMON';
export const SEARCH_POKEMON = 'HOME_SEARCH_POKEMON';
export const SET_POKEMON = 'HOME_SET_POKEMON';
export const SET_IS_LOADING = 'HOME_SET_IS_LOADING';
export const ADD_FAVORITE_POKEMON = 'HOME_ADD_FAVORITE_POKEMON';

export const loadPokemon = (
  successCallBack = () => null,
  errorCallBack  = () => null,
) => ({
  type: LOAD_POKEMON,
  payload: {
    successCallBack,
    errorCallBack,
  },
});

export const searchPokemon = (
  name,
  errorCallBack  = () => null,
) => ({
  type: SEARCH_POKEMON,
  payload: {
    name,
    errorCallBack,
  },
});

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

export const setPokemon = (pokemon) => ({
  type: SET_POKEMON,
  payload: pokemon
});

export const addFavoritePokemon = (pokemon) => ({
  type: ADD_FAVORITE_POKEMON,
  payload: pokemon
});

