import { combineReducers } from 'redux';

import homeReducer from '../../features/Home/stores/reducers';
import favoriteReducer from '../../features/Favorites/stores/reducers';

const reducers = {
  homeReducer,
  favoriteReducer
};

const allReducers = combineReducers(reducers);

export default allReducers;
