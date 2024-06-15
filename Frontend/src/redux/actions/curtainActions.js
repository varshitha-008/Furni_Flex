// Assuming you have axios or any other HTTP client for API requests
import axios from "axios";

// Action types
export const FETCH_CURTAINS_REQUEST = "FETCH_CURTAINS_REQUEST";
export const FETCH_CURTAINS_SUCCESS = "FETCH_CURTAINS_SUCCESS";
export const FETCH_CURTAINS_FAILURE = "FETCH_CURTAINS_FAILURE";
export const FILTER_CURTAINS = "FILTER_CURTAINS";
export const SORT_CURTAINS = "SORT_CURTAINS";

// Action creators
export const fetchCurtainsRequest = () => ({
  type: FETCH_CURTAINS_REQUEST,
});

export const fetchCurtainsSuccess = (curtains) => {
  // Extract subcategories from curtains
  const subcategories = [...new Set(curtains.map((curtain) => curtain.subcategory))];

  return {
    type: FETCH_CURTAINS_SUCCESS,
    payload: {
      curtains: curtains,
      subcategories: subcategories,
    },
  };
};

export const fetchCurtainsFailure = (error) => ({
  type: FETCH_CURTAINS_FAILURE,
  payload: error,
});

export const filterCurtains = (subcategory) => ({
  type: FILTER_CURTAINS,
  payload: subcategory,
});

export const sortCurtains = (sortOption) => ({
  type: SORT_CURTAINS,
  payload: sortOption,
});

// Async action to fetch curtains
export const fetchCurtains = () => {
  return async (dispatch) => {
    dispatch(fetchCurtainsRequest());
    try {
      // Replace with your actual API endpoint to fetch curtains
      const response = await axios.get(
        "https://furni-flex-4-yx74.onrender.com/curtains"
      );
      dispatch(fetchCurtainsSuccess(response.data));
    } catch (error) {
      dispatch(fetchCurtainsFailure(error.message));
    }
  };
};
