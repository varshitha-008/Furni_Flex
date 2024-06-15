import {
  FETCH_CHAIRS_REQUEST,
  FETCH_CHAIRS_SUCCESS,
  FETCH_CHAIRS_FAILURE,
  FILTER_CHAIRS,
  SORT_CHAIRS,
} from '../actions/chairActions';

const initialState = {
  chairs: [],
  filteredChairs: [],
  isLoading: false,
  isError: false,
  subcategories: [], // Array to hold dynamically generated subcategories
};

const chairsReducer = (state = initialState, action) => {
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
        chairs: action.payload.chairs,
        filteredChairs: action.payload.chairs,
        subcategories: action.payload.subcategories,
        isLoading: false,
        isError: false,
      };
    case FETCH_CHAIRS_FAILURE:
      return {
        ...state,
        chairs: [],
        isLoading: false,
        isError: true,
      };
    case FILTER_CHAIRS:
      const subcategory = action.payload;
      if (subcategory === '') {
        return {
          ...state,
          filteredChairs: state.chairs,
        };
      } else {
        const filteredChairs = state.chairs.filter(chair => chair.subcategory === subcategory);
        return {
          ...state,
          filteredChairs: filteredChairs,
        };
      }
    case SORT_CHAIRS:
      const sortOption = action.payload;
      let sortedChairs = [...state.filteredChairs];
      switch (sortOption) {
        case 'priceAsc':
          sortedChairs.sort((a, b) => a.price - b.price);
          break;
        case 'priceDesc':
          sortedChairs.sort((a, b) => b.price - a.price);
          break;
        case 'ratingAsc':
          sortedChairs.sort((a, b) => a.rating - b.rating);
          break;
        case 'ratingDesc':
          sortedChairs.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
      return {
        ...state,
        filteredChairs: sortedChairs,
      };
    default:
      return state;
  }
};

export default chairsReducer;




















// import {
//   FETCH_CHAIRS_REQUEST,
//   FETCH_CHAIRS_SUCCESS,
//   FETCH_CHAIRS_FAILURE,
//   FILTER_CHAIRS,
//   SORT_CHAIRS,
// } from "../types/chairTypes";

// const initialState = {
//   chairs: [],
//   filteredChairs: [],
//   isLoading: false,
//   isError: false,
// };

// const chairReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_CHAIRS_REQUEST:
//       return { ...state, isLoading: true, isError: false };
//     case FETCH_CHAIRS_SUCCESS:
//       return {
//         ...state,
//         chairs: action.payload,
//         filteredChairs: action.payload,
//         isLoading: false,
//       };
//     case FETCH_CHAIRS_FAILURE:
//       return { ...state, isLoading: false, isError: true };
//     case FILTER_CHAIRS:
//       return {
//         ...state,
//         filteredChairs: state.chairs.filter(
//           (chair) => {
//             if(action.payload==="") return true;  
//             else return chair.subcategory === action.payload
//           }
//         ),
//       };
//     case SORT_CHAIRS:
//       const sortedChairs = [...state.filteredChairs].sort((a, b) => {
//         if (action.payload === "priceAsc") return a.price - b.price;
//         if (action.payload === "priceDesc") return b.price - a.price;
//         if (action.payload === "ratingAsc") return a.rating - b.rating;
//         if (action.payload === "ratingDesc") return b.rating - a.rating;
//         return 0;
//       });
//       return { ...state, filteredChairs: sortedChairs };

//     default:
//       return state;
//   }
// };

// export default chairReducer;
