import {
  FETCH_TABLES_REQUEST,
  FETCH_TABLES_SUCCESS,
  FETCH_TABLES_FAILURE,
  FILTER_TABLES,
  SORT_TABLES,
} from '../actions/tableActions';

const initialState = {
  tables: [],
  filteredTables: [],
  isLoading: false,
  isError: false,
  subcategories: [], // Array to hold dynamically generated subcategories
};

const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TABLES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_TABLES_SUCCESS:
      return {
        ...state,
        tables: action.payload.tables,
        filteredTables: action.payload.tables,
        subcategories: action.payload.subcategories,
        isLoading: false,
        isError: false,
      };
    case FETCH_TABLES_FAILURE:
      return {
        ...state,
        tables: [],
        isLoading: false,
        isError: true,
      };
    case FILTER_TABLES:
      const subcategory = action.payload;
      if (subcategory === '') {
        return {
          ...state,
          filteredTables: state.tables,
        };
      } else {
        const filteredTables = state.tables.filter(table => table.subcategory === subcategory);
        return {
          ...state,
          filteredTables: filteredTables,
        };
      }
    case SORT_TABLES:
      const sortOption = action.payload;
      let sortedTables = [...state.filteredTables];
      switch (sortOption) {
        case 'priceAsc':
          sortedTables.sort((a, b) => a.price - b.price);
          break;
        case 'priceDesc':
          sortedTables.sort((a, b) => b.price - a.price);
          break;
        case 'ratingAsc':
          sortedTables.sort((a, b) => a.rating - b.rating);
          break;
        case 'ratingDesc':
          sortedTables.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
      return {
        ...state,
        filteredTables: sortedTables,
      };
    default:
      return state;
  }
};

export default tablesReducer;
