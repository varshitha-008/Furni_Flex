//reducer.js


import { combineReducers } from 'redux';
import {
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_SEARCH_QUERY
} from './actions';

const initialState = {
  products: [],
  cart: [],
  searchQuery: ''
};

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

const searchQueryReducer = (state = initialState.searchQuery, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  searchQuery: searchQueryReducer
});

export default rootReducer;
