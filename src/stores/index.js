import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'MyAPP',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
const getState = () => store.getState();

export { getState, persistor };
export default store;
