// Assuming you have axios or any other HTTP client for API requests
import axios from "axios";

// Action types
export const FETCH_WARDROBES_REQUEST = "FETCH_WARDROBES_REQUEST";
export const FETCH_WARDROBES_SUCCESS = "FETCH_WARDROBES_SUCCESS";
export const FETCH_WARDROBES_FAILURE = "FETCH_WARDROBES_FAILURE";
export const FILTER_WARDROBES = "FILTER_WARDROBES";
export const SORT_WARDROBES = "SORT_WARDROBES";

// Action creators
export const fetchWardrobesRequest = () => ({
  type: FETCH_WARDROBES_REQUEST,
});

export const fetchWardrobesSuccess = (wardrobes) => {
  // Extract subcategories from wardrobes
  const subcategories = [...new Set(wardrobes.map((wardrobe) => wardrobe.subcategory))];

  return {
    type: FETCH_WARDROBES_SUCCESS,
    payload: {
      wardrobes: wardrobes,
      subcategories: subcategories,
    },
  };
};

export const fetchWardrobesFailure = (error) => ({
  type: FETCH_WARDROBES_FAILURE,
  payload: error,
});

export const filterWardrobes = (subcategory) => ({
  type: FILTER_WARDROBES,
  payload: subcategory,
});

export const sortWardrobes = (sortOption) => ({
  type: SORT_WARDROBES,
  payload: sortOption,
});

// Async action to fetch wardrobes
export const fetchWardrobes = () => {
  return async (dispatch) => {
    dispatch(fetchWardrobesRequest());
    try {
      // Replace with your actual API endpoint to fetch wardrobes
      const response = await axios.get(
        "https://furni-flex-4-yx74.onrender.com/wardrops"
      );
      dispatch(fetchWardrobesSuccess(response.data));
    } catch (error) {
      dispatch(fetchWardrobesFailure(error.message));
    }
  };
};
