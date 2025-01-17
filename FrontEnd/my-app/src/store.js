import { createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducers, productsListReducers } from './reducers/productsReducers';

const reducer = combineReducers({
    productsList:productsListReducers,
    productDetails:productDetailsReducers
})

const initialState={}
const middlewere=[thunk]
const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middlewere),
  
  ));
export default store;