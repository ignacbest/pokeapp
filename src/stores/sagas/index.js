import {
    all,
    fork
} from 'redux-saga/effects';

import homeSagas from '../../features/Home/stores/sagas';

export default function* rootSaga() {
  yield all([
    fork(homeSagas),
  ]);
}
  