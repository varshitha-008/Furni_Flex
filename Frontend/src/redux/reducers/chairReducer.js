import {
    FETCH_CHAIRS_REQUEST,
    FETCH_CHAIRS_SUCCESS,
    FETCH_CHAIRS_FAILURE,
    FILTER_CHAIRS_BY_PRICE_LOW_TO_HIGH,
    FILTER_CHAIRS_BY_PRICE_HIGH_TO_LOW,
    FILTER_CHAIRS_BY_CATEGORY,
    ADD_TO_FAVORITES_REQUEST,
  } from '../actionTypes';
  
  const initialState = {
    chairs: [],
    filteredChairs: [],
    isLoading: false,
    isError: false,
  };
  
  const chairReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHAIRS_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case FETCH_CHAIRS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          chairs: action.payload,
          filteredChairs: action.payload,
        };
      case FETCH_CHAIRS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case FILTER_CHAIRS_BY_PRICE_LOW_TO_HIGH:
        return {
          ...state,
          filteredChairs: [...state.chairs].sort((a, b) => a.price - b.price),
        };
      case FILTER_CHAIRS_BY_PRICE_HIGH_TO_LOW:
        return {
          ...state,
          filteredChairs: [...state.chairs].sort((a, b) => b.price - a.price),
        };
      case FILTER_CHAIRS_BY_CATEGORY:
        return {
          ...state,
          filteredChairs: state.chairs.filter(chair => chair.subcategory.trim().toLowerCase() === action.payload.trim().toLowerCase()),
        };
      case ADD_TO_FAVORITES_REQUEST:
        // Simulate adding to favorites by chairId
        return state;
      default:
        return state;
    }
  };
  
  export default chairReducer;
  