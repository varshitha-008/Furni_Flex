import {
  FETCH_WARDROBES_REQUEST,
  FETCH_WARDROBES_SUCCESS,
  FETCH_WARDROBES_FAILURE,
  FILTER_WARDROBES,
  SORT_WARDROBES,
} from '../actions/wardrobeActions';

const initialState = {
  wardrobes: [],
  filteredWardrobes: [],
  isLoading: false,
  isError: false,
  subcategories: [], // Array to hold dynamically generated subcategories
};

const wardrobeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WARDROBES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_WARDROBES_SUCCESS:
      return {
        ...state,
        wardrobes: action.payload.wardrobes,
        filteredWardrobes: action.payload.wardrobes,
        subcategories: action.payload.subcategories,
        isLoading: false,
        isError: false,
      };
    case FETCH_WARDROBES_FAILURE:
      return {
        ...state,
        wardrobes: [],
        isLoading: false,
        isError: true,
      };
    case FILTER_WARDROBES:
      const subcategory = action.payload;
      if (subcategory === '') {
        return {
          ...state,
          filteredWardrobes: state.wardrobes,
        };
      } else {
        const filteredWardrobes = state.wardrobes.filter(wardrobe => wardrobe.subcategory === subcategory);
        return {
          ...state,
          filteredWardrobes: filteredWardrobes,
        };
      }
    case SORT_WARDROBES:
      const sortOption = action.payload;
      let sortedWardrobes = [...state.filteredWardrobes];
      switch (sortOption) {
        case 'priceAsc':
          sortedWardrobes.sort((a, b) => a.price - b.price);
          break;
        case 'priceDesc':
          sortedWardrobes.sort((a, b) => b.price - a.price);
          break;
        case 'ratingAsc':
          sortedWardrobes.sort((a, b) => a.rating - b.rating);
          break;
        case 'ratingDesc':
          sortedWardrobes.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
      return {
        ...state,
        filteredWardrobes: sortedWardrobes,
      };
    default:
      return state;
  }
};

export default wardrobeReducer;
