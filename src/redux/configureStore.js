import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataCovid, { loadData } from './covid/dataCovid';

const rootReducer = combineReducers({
  dataCovid,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.dispatch(loadData());

export default store;
