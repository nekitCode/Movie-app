import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {searchReducer} from '../reducer/searchReducer';

const rootReducer = combineReducers({search: searchReducer})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));