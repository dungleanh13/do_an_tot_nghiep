import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Reducers/RootReducer';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import ReduxPersist from '../../Config/ReduxPersist';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Sagas/RootSaga';

const persistedReducer = persistReducer(ReduxPersist.storeConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, logger, sagaMiddleware),
);
sagaMiddleware.run(rootSaga)
const persistor = persistStore(store);
export {store, persistor};
