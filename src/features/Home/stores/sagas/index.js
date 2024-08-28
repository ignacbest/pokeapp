import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as HomeActions from '../actions';
import { getPokemon } from '../../../../services/home';
import { DEFAULT_UNKNOWN_ERROR_MESSAGE, getRandomNumber } from '../../../../utils';

function* loadPokemon({ payload }) {
  const {
    successCallback,
    errorCallback,
  } = payload;
  try {
    yield put(HomeActions.setIsLoading(true));
    const n = getRandomNumber();
    const data = yield call(getPokemon, n);
    yield put(HomeActions.setPokemon(data));
    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback, DEFAULT_UNKNOWN_ERROR_MESSAGE);
  } finally {
    yield put(HomeActions.setIsLoading(false));
  }
}

export default function* homeSagas() {
  yield takeLatest(HomeActions.LOAD_POKEMON, loadPokemon);
}