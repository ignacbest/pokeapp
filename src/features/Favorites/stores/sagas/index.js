import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as FavoriteActions from '../actions';

import { DEFAULT_UNKNOWN_ERROR_MESSAGE } from '../../../../utils';

function* doRemovePokemon({ payload }) {
  try {
    yield put(FavoriteActions.setIsLoading(true));
    yield put(FavoriteActions.deletePokemon(payload));
  } catch (error) {
    yield call(errorCallback, DEFAULT_UNKNOWN_ERROR_MESSAGE);
  } finally {
    yield put(FavoriteActions.setIsLoading(false));
  }
}

export default function* favoriteSagas() {
  yield takeLatest(FavoriteActions.DO_REMOVE_FAVORITE_POKEMON, doRemovePokemon);
}