
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    ADD_TO_CART,
    REMOVE_FROM_CART,
  } from '../types/addTypes';
  
  const initialState = {
    
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_FAVORITES:
        const updatedFavorites = [...state.favorites, action.payload];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return {
          ...state,
          favorites: updatedFavorites,
        };
  
      case REMOVE_FROM_FAVORITES:
        const filteredFavorites = state.favorites.filter(
          (item) => item.productId !== action.payload
        );
        localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
        return {
          ...state,
          favorites: filteredFavorites,
        };
  
      case ADD_TO_CART:
        const updatedCart = [...state.cart, action.payload];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
  
      case REMOVE_FROM_CART:
        const filteredCart = state.cart.filter(
          (item) => item.productId !== action.payload
        );
        localStorage.setItem('cart', JSON.stringify(filteredCart));
        return {
          ...state,
          cart: filteredCart,
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  