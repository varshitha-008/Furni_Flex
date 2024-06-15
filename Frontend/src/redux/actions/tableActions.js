// Assuming you have axios or any other HTTP client for API requests
import axios from "axios";

// Action types
export const FETCH_TABLES_REQUEST = "FETCH_TABLES_REQUEST";
export const FETCH_TABLES_SUCCESS = "FETCH_TABLES_SUCCESS";
export const FETCH_TABLES_FAILURE = "FETCH_TABLES_FAILURE";
export const FILTER_TABLES = "FILTER_TABLES";
export const SORT_TABLES = "SORT_TABLES";

// Action creators
export const fetchTablesRequest = () => ({
  type: FETCH_TABLES_REQUEST,
});

export const fetchTablesSuccess = (tables) => {
  // Extract subcategories from tables
  const subcategories = [...new Set(tables.map((table) => table.subcategory))];

  return {
    type: FETCH_TABLES_SUCCESS,
    payload: {
      tables: tables,
      subcategories: subcategories,
    },
  };
};

export const fetchTablesFailure = (error) => ({
  type: FETCH_TABLES_FAILURE,
  payload: error,
});

export const filterTables = (subcategory) => ({
  type: FILTER_TABLES,
  payload: subcategory,
});

export const sortTables = (sortOption) => ({
  type: SORT_TABLES,
  payload: sortOption,
});

// Async action to fetch tables
export const fetchTables = () => {
  return async (dispatch) => {
    dispatch(fetchTablesRequest());
    try {
      // Replace with your actual API endpoint to fetch tables
      const response = await axios.get(
        "https://furni-flex-4-yx74.onrender.com/tables"
      );
      dispatch(fetchTablesSuccess(response.data));
    } catch (error) {
      dispatch(fetchTablesFailure(error.message));
    }
  };
};
