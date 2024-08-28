import { combineReducers } from 'redux';

import homeReducer from '../../features/Home/stores/reducers';

const reducers = {
  homeReducer,
};

const allReducers = combineReducers(reducers);

export default allReducers;
