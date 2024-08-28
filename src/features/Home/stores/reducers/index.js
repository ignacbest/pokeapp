import * as HomeActions from '../actions';

const initialState = {
  pokemon: [],
  isLoading: true,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeActions.SET_POKEMON: {
      return {
        ...state,
        pokemon: action.payload,
      };
    }
    case HomeActions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default homeReducer;