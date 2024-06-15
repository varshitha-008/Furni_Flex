import {
    FETCH_CHAIRS_REQUEST,
    FETCH_CHAIRS_SUCCESS,
    FETCH_CHAIRS_FAILURE,
    FILTER_CHAIRS_BY_PRICE_LOW_TO_HIGH,
    FILTER_CHAIRS_BY_PRICE_HIGH_TO_LOW,
    FILTER_CHAIRS_BY_CATEGORY,
    ADD_TO_FAVORITES_REQUEST,
  } from '../actionTypes';
  
  export const fetchChairs = () => async (dispatch) => {
    dispatch({ type: FETCH_CHAIRS_REQUEST });
    try {
      const response = await fetch('https://furni-flex-4-yx74.onrender.com/chairs');
      if (!response.ok) {
        throw new Error('Failed to fetch chairs');
      }
      const data = await response.json();
      dispatch({ type: FETCH_CHAIRS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_CHAIRS_FAILURE });
    }
  };
  
  export const filterChairsByPriceLowToHigh = () => ({
    type: FILTER_CHAIRS_BY_PRICE_LOW_TO_HIGH,
  });
  
  export const filterChairsByPriceHighToLow = () => ({
    type: FILTER_CHAIRS_BY_PRICE_HIGH_TO_LOW,
  });
  
  export const filterChairsByCategory = (category) => ({
    type: FILTER_CHAIRS_BY_CATEGORY,
    payload: category,
  });
  
  export const addToFavorites = (chairId) => ({
    type: ADD_TO_FAVORITES_REQUEST,
    payload: chairId,
  });
  