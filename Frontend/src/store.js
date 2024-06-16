

// import { createStore } from 'redux';

// // Initial State
// const initialState = {
//   chairs: [],
//   cart: [],
//   searchQuery: '' // New state for search query
// };

// // Action Types
// const SET_CHAIRS = 'SET_CHAIRS';
// const ADD_TO_CART = 'ADD_TO_CART';
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// const CLEAR_CART = 'CLEAR_CART'; // New action type for clearing the cart
// const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'; // New action type for setting search query

// // Action Creators
// export const setChairs = (chairs) => ({
//   type: SET_CHAIRS,
//   payload: chairs
// });

// export const addToCart = (chair) => ({
//   type: ADD_TO_CART,
//   payload: chair
// });

// export const removeFromCart = (chairId) => ({
//   type: REMOVE_FROM_CART,
//   payload: chairId
// });

// export const clearCart = () => ({ // Action creator for clearing the cart
//   type: CLEAR_CART
// });

// export const setSearchQuery = (query) => ({ // Action creator for setting search query
//   type: SET_SEARCH_QUERY,
//   payload: query
// });

// // Reducer
// const chairsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CHAIRS:
//       return {
//         ...state,
//         chairs: action.payload
//       };
//     case ADD_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, action.payload]
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((chair) => chair.id !== action.payload)
//       };
//     case CLEAR_CART:
//       return {
//         ...state,
//         cart: []
//       };
//     case SET_SEARCH_QUERY:
//       return {
//         ...state,
//         searchQuery: action.payload
//       };
//     default:
//       return state;
//   }
// };

// // Create Store
// const store = createStore(chairsReducer);

// export default store;



// import { createStore, combineReducers } from 'redux';

// // Action Types
// const SET_PRODUCTS = 'SET_PRODUCTS';
// const ADD_TO_CART = 'ADD_TO_CART';
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// const CLEAR_CART = 'CLEAR_CART';
// const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

// // Action Creators
// export const setProducts = (products) => ({
//   type: SET_PRODUCTS,
//   payload: products
// });

// export const addToCart = (product) => ({
//   type: ADD_TO_CART,
//   payload: product
// });

// export const removeFromCart = (productId) => ({
//   type: REMOVE_FROM_CART,
//   payload: productId
// });

// export const clearCart = () => ({
//   type: CLEAR_CART
// });

// export const setSearchQuery = (query) => ({
//   type: SET_SEARCH_QUERY,
//   payload: query
// });

// // Initial State
// const initialState = {
//   products: [],
//   cart: [],
//   searchQuery: ''
// };

// // Products Reducer
// const productsReducer = (state = initialState.products, action) => {
//   switch (action.type) {
//     case SET_PRODUCTS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// // Cart Reducer
// const cartReducer = (state = initialState.cart, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, action.payload];
//     case REMOVE_FROM_CART:
//       return state.filter((item) => item.id !== action.payload);
//     case CLEAR_CART:
//       return [];
//     default:
//       return state;
//   }
// };

// // Search Query Reducer
// const searchQueryReducer = (state = initialState.searchQuery, action) => {
//   switch (action.type) {
//     case SET_SEARCH_QUERY:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// // Combine Reducers
// const rootReducer = combineReducers({
//   products: productsReducer,
//   cart: cartReducer,
//   searchQuery: searchQueryReducer
// });

// // Create Store
// const store = createStore(rootReducer);

// export default store;


import { createStore, combineReducers } from 'redux';

// Action Types
const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

// Action Creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

// Initial State
const initialState = {
  products: [],
  cart: [],
  searchQuery: ''
};

// Products Reducer
const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

// Cart Reducer
const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

// Search Query Reducer
const searchQueryReducer = (state = initialState.searchQuery, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  searchQuery: searchQueryReducer
});

// Create Store
const store = createStore(rootReducer);

export default store;






// import { createStore } from 'redux';

// // Initial State
// const initialState = {
//   chairs: [],
//   cart: []
// };

// // Action Types
// const SET_CHAIRS = 'SET_CHAIRS';
// const ADD_TO_CART = 'ADD_TO_CART';
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// // Action Creators
// export const setChairs = (chairs) => ({
//   type: SET_CHAIRS,
//   payload: chairs
// });

// export const addToCart = (chair) => ({
//   type: ADD_TO_CART,
//   payload: chair
// });

// export const removeFromCart = (chairId) => ({
//   type: REMOVE_FROM_CART,
//   payload: chairId
// });

// // Reducer
// const chairsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CHAIRS:
//       return {
//         ...state,
//         chairs: action.payload
//       };
//     case ADD_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, action.payload]
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((chair) => chair.id !== action.payload)
//       };
//     default:
//       return state;
//   }
// };

// // Create Store
// const store = createStore(chairsReducer);

// export default store;



// import { createStore, combineReducers } from 'redux';

// const initialHomepageState = {
//   categories: [
//     { id: 1, title: 'Chairs', description: 'Description for Category 1' },
//     { id: 2, title: 'Sofas', description: 'Description for Category 2' },
//     { id: 3, title: 'Tables', description: 'Description for Category 3' },
//     { id: 4, title: 'Wardrobes', description: 'Description for Category 4' },
//     { id: 5, title: 'Curtains', description: 'Description for Category 5' },
//   ],
// };

// const homepageReducer = (state = initialHomepageState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   homepage: homepageReducer,
// });

// const store = createStore(rootReducer);

// export default store;

// import { createStore, combineReducers } from 'redux';

// const initialHomepageState = {
//   categories: [
//     { id: 1, title: 'Chairs', description: 'Description for Category 1' },
//     { id: 2, title: 'Sofas', description: 'Description for Category 2' },
//     { id: 3, title: 'Tables', description: 'Description for Category 3' },
//     { id: 4, title: 'Wardrobes', description: 'Description for Category 4' },
//     { id: 5, title: 'Curtains', description: 'Description for Category 5' },
//   ],
// };

// const homepageReducer = (state = initialHomepageState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   homepage: homepageReducer,
// });

// const store = createStore(rootReducer);

// export default store;
