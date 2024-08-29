import * as FavoriteActions from '../actions';

const initialState = {
  pokemon: [],
  isLoading: true,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FavoriteActions.ADD_FAVORITE_POKEMON: {
      const newPokemonList = [...state.pokemon, ...action.payload];
      return {
        ...state,
        pokemon: newPokemonList,
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;