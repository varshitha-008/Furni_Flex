// actions.js

import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    ADD_TO_CART,
    REMOVE_FROM_CART,
  } from '../types/addTypes';
  
  // Action Creators for Favorites
  export const addToFavorites = (product) => {
    return {
      type: ADD_TO_FAVORITES,
      payload: product,
    };
  };
  
  export const removeFromFavorites = (productId) => {
    return {
      type: REMOVE_FROM_FAVORITES,
      payload: productId,
    };
  };
  
  // Action Creators for Cart
  export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: productId,
    };
  };
  