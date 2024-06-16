//Action.js 
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query
});
