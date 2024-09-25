import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as HomeActions from '../actions';
import * as FavoriteActions from '../../../Favorites/stores/actions';

import { getPokemon } from '../../../../services/home';
import {
  DEFAULT_UNKNOWN_ERROR_MESSAGE,
  ERROR_MESSAGE_SEARCH_POKEMON,
  getRandomNumber
} from '../../../../utils';

function* loadPokemon({ payload }) {
  const {
    errorCallback,
  } = payload;
  try {
    yield put(HomeActions.setIsLoading(true));
    const n = getRandomNumber();
    const data = yield call(getPokemon, n);
    yield put(HomeActions.setPokemon(data));
  } catch (error) {
    yield call(errorCallback, DEFAULT_UNKNOWN_ERROR_MESSAGE);
  } finally {
    yield put(HomeActions.setIsLoading(false));
  }
}

function* doSearchPokemon({ payload }) {
  const {
    name,
    errorCallBack,
  } = payload;
  try {
    yield put(HomeActions.setIsLoading(true));
    const pokemon = yield call(getPokemon, name);
    yield put(HomeActions.setPokemon(pokemon));
  } catch (error) {
    yield call(errorCallBack, ERROR_MESSAGE_SEARCH_POKEMON);
  } finally {
    yield put(HomeActions.setIsLoading(false));
  }
}

function* setFavoritePokemon({ payload }) {
  const a = [payload]
  yield put(FavoriteActions.addFavoritePokemon(a));
}

export default function* homeSagas() {
  yield takeLatest(HomeActions.LOAD_POKEMON, loadPokemon);
  yield takeLatest(HomeActions.SEARCH_POKEMON, doSearchPokemon);
  yield takeLatest(HomeActions.ADD_FAVORITE_POKEMON, setFavoritePokemon);
}