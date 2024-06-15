// Assuming you have axios or any other HTTP client for API requests
import axios from "axios";

// Action types
export const FETCH_CHAIRS_REQUEST = "FETCH_CHAIRS_REQUEST";
export const FETCH_CHAIRS_SUCCESS = "FETCH_CHAIRS_SUCCESS";
export const FETCH_CHAIRS_FAILURE = "FETCH_CHAIRS_FAILURE";
export const FILTER_CHAIRS = "FILTER_CHAIRS";
export const SORT_CHAIRS = "SORT_CHAIRS";

// Action creators
export const fetchChairsRequest = () => ({
  type: FETCH_CHAIRS_REQUEST,
});

export const fetchChairsSuccess = (chairs) => {
  // Extract subcategories from chairs
  const subcategories = [...new Set(chairs.map((chair) => chair.subcategory))];

  return {
    type: FETCH_CHAIRS_SUCCESS,
    payload: {
      chairs: chairs,
      subcategories: subcategories,
    },
  };
};

export const fetchChairsFailure = (error) => ({
  type: FETCH_CHAIRS_FAILURE,
  payload: error,
});

export const filterChairs = (subcategory) => ({
  type: FILTER_CHAIRS,
  payload: subcategory,
});

export const sortChairs = (sortOption) => ({
  type: SORT_CHAIRS,
  payload: sortOption,
});

// Async action to fetch chairs
export const fetchChairs = () => {
  return async (dispatch) => {
    dispatch(fetchChairsRequest());
    try {
      // Replace with your actual API endpoint to fetch chairs
      const response = await axios.get(
        "https://furni-flex-4-yx74.onrender.com/chairs"
      );
      dispatch(fetchChairsSuccess(response.data));
    } catch (error) {
      dispatch(fetchChairsFailure(error.message));
    }
  };
};
