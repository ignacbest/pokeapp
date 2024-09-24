import {
    all,
    fork
} from 'redux-saga/effects';

import homeSagas from '../../features/Home/stores/sagas';
import favoriteSagas from '../../features/Favorites/stores/sagas';

export default function* rootSaga() {
  yield all([
    fork(homeSagas),
    fork(favoriteSagas),
  ]);
}
  