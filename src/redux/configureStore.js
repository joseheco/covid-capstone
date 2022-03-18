import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataCovid, { loadDataCountries } from './covid/dataCovid';

const rootReducer = combineReducers({
  dataCovid, 
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.dispatch(loadDataCountries());
export default store;
