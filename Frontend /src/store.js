


import { createStore, combineReducers } from 'redux';

// Action Types
const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_USER = 'SET_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const SET_ADDED_TO_CART = 'SET_ADDED_TO_CART';

// Action Creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const setAddedToCart = (productId, addedToCart) => ({
  type: SET_ADDED_TO_CART,
  payload: { productId, addedToCart },
});

// Initial State
const initialState = {
  products: [],
  cart: [],
  searchQuery: '',
  user: null,
};

// Products Reducer
const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    case SET_ADDED_TO_CART:
      return state.map(product =>
        product.id === action.payload.productId ? { ...product, addedToCart: action.payload.addedToCart } : product
      );
    default:
      return state;
  }
};

// Cart Reducer
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

// Search Query Reducer
const searchQueryReducer = (state = initialState.searchQuery, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

// User Reducer
const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  searchQuery: searchQueryReducer,
  user: userReducer,
});

//Store
const store = createStore(rootReducer);

export default store;
