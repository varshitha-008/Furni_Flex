import {
  FETCH_SOFAS_REQUEST,
  FETCH_SOFAS_SUCCESS,
  FETCH_SOFAS_FAILURE,
  FILTER_SOFAS,
  SORT_SOFAS,
} from '../actions/sofaActions'; // Update import path as per your file structure

const initialState = {
  sofas: [],
  filteredSofas: [],
  isLoading: false,
  isError: false,
  subcategories: [], // Array to hold dynamically generated subcategories
};

const sofaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOFAS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_SOFAS_SUCCESS:
      return {
        ...state,
        sofas: action.payload.sofas,
        filteredSofas: action.payload.sofas,
        subcategories: action.payload.subcategories,
        isLoading: false,
        isError: false,
      };
    case FETCH_SOFAS_FAILURE:
      return {
        ...state,
        sofas: [],
        isLoading: false,
        isError: true,
      };
    case FILTER_SOFAS:
      const subcategory = action.payload;
      if (subcategory === '') {
        return {
          ...state,
          filteredSofas: state.sofas,
        };
      } else {
        const filteredSofas = state.sofas.filter(sofa => sofa.subcategory === subcategory);
        return {
          ...state,
          filteredSofas: filteredSofas,
        };
      }
    case SORT_SOFAS:
      const sortOption = action.payload;
      let sortedSofas = [...state.filteredSofas];
      switch (sortOption) {
        case 'priceAsc':
          sortedSofas.sort((a, b) => a.price - b.price);
          break;
        case 'priceDesc':
          sortedSofas.sort((a, b) => b.price - a.price);
          break;
        case 'ratingAsc':
          sortedSofas.sort((a, b) => a.rating - b.rating);
          break;
        case 'ratingDesc':
          sortedSofas.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
      return {
        ...state,
        filteredSofas: sortedSofas,
      };
    default:
      return state;
  }
};

export default sofaReducer;
