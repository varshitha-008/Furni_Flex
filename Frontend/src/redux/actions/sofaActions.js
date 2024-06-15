// Assuming you have axios or any other HTTP client for API requests
import axios from "axios";

// Action types
export const FETCH_SOFAS_REQUEST = "FETCH_SOFAS_REQUEST";
export const FETCH_SOFAS_SUCCESS = "FETCH_SOFAS_SUCCESS";
export const FETCH_SOFAS_FAILURE = "FETCH_SOFAS_FAILURE";
export const FILTER_SOFAS = "FILTER_SOFAS";
export const SORT_SOFAS = "SORT_SOFAS";

// Action creators
export const fetchSofasRequest = () => ({
  type: FETCH_SOFAS_REQUEST,
});

export const fetchSofasSuccess = (sofas) => {
  // Extract subcategories from sofas
  const subcategories = [...new Set(sofas.map((sofa) => sofa.subcategory))];

  return {
    type: FETCH_SOFAS_SUCCESS,
    payload: {
      sofas: sofas,
      subcategories: subcategories,
    },
  };
};

export const fetchSofasFailure = (error) => ({
  type: FETCH_SOFAS_FAILURE,
  payload: error,
});

export const filterSofas = (subcategory) => ({
  type: FILTER_SOFAS,
  payload: subcategory,
});

export const sortSofas = (sortOption) => ({
  type: SORT_SOFAS,
  payload: sortOption,
});

// Async action to fetch sofas
export const fetchSofas = () => {
  return async (dispatch) => {
    dispatch(fetchSofasRequest());
    try {
      // Replace with your actual API endpoint to fetch sofas
      const response = await axios.get(
        "https://furni-flex-4-yx74.onrender.com/sofa"
      );
      dispatch(fetchSofasSuccess(response.data));
    } catch (error) {
      dispatch(fetchSofasFailure(error.message));
    }
  };
};
