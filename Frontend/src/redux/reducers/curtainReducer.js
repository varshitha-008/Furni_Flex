import {
  FETCH_CURTAINS_REQUEST,
  FETCH_CURTAINS_SUCCESS,
  FETCH_CURTAINS_FAILURE,
  FILTER_CURTAINS,
  SORT_CURTAINS,
} from '../actions/curtainActions'; // Adjust import path as per your file structure

const initialState = {
  curtains: [],
  filteredCurtains: [],
  isLoading: false,
  isError: false,
  subcategories: [], // Array to hold dynamically generated subcategories
};

const curtainsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURTAINS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_CURTAINS_SUCCESS:
      return {
        ...state,
        curtains: action.payload.curtains,
        filteredCurtains: action.payload.curtains,
        subcategories: action.payload.subcategories,
        isLoading: false,
        isError: false,
      };
    case FETCH_CURTAINS_FAILURE:
      return {
        ...state,
        curtains: [],
        isLoading: false,
        isError: true,
      };
    case FILTER_CURTAINS:
      const subcategory = action.payload;
      if (subcategory === '') {
        return {
          ...state,
          filteredCurtains: state.curtains,
        };
      } else {
        const filteredCurtains = state.curtains.filter(curtain => curtain.subcategory === subcategory);
        return {
          ...state,
          filteredCurtains: filteredCurtains,
        };
      }
    case SORT_CURTAINS:
      const sortOption = action.payload;
      let sortedCurtains = [...state.filteredCurtains];
      switch (sortOption) {
        case 'priceAsc':
          sortedCurtains.sort((a, b) => a.price - b.price);
          break;
        case 'priceDesc':
          sortedCurtains.sort((a, b) => b.price - a.price);
          break;
        case 'ratingAsc':
          sortedCurtains.sort((a, b) => a.rating - b.rating);
          break;
        case 'ratingDesc':
          sortedCurtains.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
      return {
        ...state,
        filteredCurtains: sortedCurtains,
      };
    default:
      return state;
  }
};

export default curtainsReducer;
