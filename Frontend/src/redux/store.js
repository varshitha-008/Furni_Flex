import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk"; 
import chairReducer from "./reducers/chairReducer";
import curtainReducer from "./reducers/curtainReducer";
import sofaReducer from "./reducers/sofaReducer";
import tableReducer from "./reducers/tableReducer";
import wardrobeReducer from "./reducers/wardrobeReducer";
import addReducer from "./reducers/addReducer"; 

const preloadedState = {
  chairs: {
    items: [],
    filteredItems: [],
    isLoading: false,
    isError: false,
  },
  sofas: {
    items: [],
    filteredItems: [],
    isLoading: false,
    isError: false,
  },
  tables: {
    items: [],
    filteredItems: [],
    isLoading: false,
    isError: false,
  },
  wardrobes: {
    items: [],
    filteredItems: [],
    isLoading: false,
    isError: false,
  },
  curtains: {
    items: [],
    filteredItems: [],
    isLoading: false,
    isError: false,
  },
  adds: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  }
  
};

const rootReducer = combineReducers({
  chairs: chairReducer,
  curtains: curtainReducer,
  sofas: sofaReducer,
  tables: tableReducer,
  wardrobes: wardrobeReducer,
  adds: addReducer
});

const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default store;




















// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
// import chairReducer from "./reducers/chairReducer";
// import curtainReducer from "./reducers/curtainReducer";
// import sofaReducer from "./reducers/sofaReducer";
// import tableReducer from "./reducers/tableReducer";
// import wardrobeReducer from "./reducers/wardrobeReducer";

// const preloadedState = {
//   chairs: {
//     items: [],
//     filteredItems: [],
//     isLoading: false,
//     isError: false,
//   },
//   sofas: {
//     items: [],
//     filteredItems: [],
//     isLoading: false,
//     isError: false,
//   },
//   tables: {
//     items: [],
//     filteredItems: [],
//     isLoading: false,
//     isError: false,
//   },
//   wardrobes: {
//     items: [],
//     filteredItems: [],
//     isLoading: false,
//     isError: false,
//   },
//   curtains: {
//     items: [],
//     filteredItems: [],
//     isLoading: false,
//     isError: false,
//   },
// };

// const rootReducer = combineReducers({
//   chairs: chairReducer,
//   curtains: curtainReducer,
//   sofas: sofaReducer,
//   tables: tableReducer,
//   wardrobes: wardrobeReducer,
// });

// const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

// export default store;
