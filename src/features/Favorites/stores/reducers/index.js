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
    case FavoriteActions.REMOVE_FAVORITE_POKEMON: {
      const updatedPokemonList = state.pokemon.filter(
        (poke) => poke.id !== action.payload
      );
      return {
        ...state,
        pokemon: updatedPokemonList,
      };
    }
    case FavoriteActions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
