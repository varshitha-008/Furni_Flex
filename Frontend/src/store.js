// // src/store.js
// import { createStore } from 'redux';

// // Initial State
// const initialState = {
//   chairs: [
//     {
//       "id": "chair001",
//       "category": "chair",
//       "subcategory": "visitor chair",
//       "title": "Royaloak Grace Visitor Chair",
//       "price": 10999,
//       "rating": 4.5,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/r/cr20233021_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair002",
//       "category": "chair",
//       "subcategory": "visitor chair",
//       "title": "Royaloak Sonic Visitor Chair",
//       "price": 7990,
//       "rating": 4.3,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/r/cr20233024_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair003",
//       "category": "chair",
//       "subcategory": "study chair",
//       "title": "Royaloak Captain Kids Study Chair With Revolving Base",
//       "price": 6900,
//       "rating": 4.4,
//       "img": "https://www.royaloakindia.com/media/catalog/product/s/d/sdc23_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair004",
//       "category": "chair",
//       "subcategory": "computer chair",
//       "title": "Royaloak Atlas Computer Chair with Revolving Base",
//       "price": 6499,
//       "rating": 4.1,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/r/cr8022_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair005",
//       "category": "chair",
//       "subcategory": "visitor chair",
//       "title": "Royaloak Zen Visitor Chair",
//       "price": 6499,
//       "rating": 4,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/r/cr20233023_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair006",
//       "category": "chair",
//       "subcategory": "visitor chair",
//       "title": "Royaloak Atlas Visitor Chair",
//       "price": 4989,
//       "rating": 3.9,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/r/cr8023_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair007",
//       "category": "chair",
//       "subcategory": "visitor chair",
//       "title": "Royaloak Zita Mesh Visitor Chair",
//       "price": 8989,
//       "rating": 4.2,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/r/cr20233019_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair008",
//       "category": "chair",
//       "subcategory": "office chair",
//       "title": "Royaloak Zita Mesh Office Chair with Revolving Base",
//       "price": 12499,
//       "rating": 4.3,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/r/cr20233018_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair009",
//       "category": "chair",
//       "subcategory": "study chair",
//       "title": "Royaloak Mark Kids Chair with Revolving Base",
//       "price": 3990,
//       "rating": 4,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/r/cr7801_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair010",
//       "category": "chair",
//       "subcategory": "visitor chair",
//       "title": "Royaloak Venice Italian Mesh Visitor Chair",
//       "price": 7990,
//       "rating": 4.4,
//       "img": "https://www.royaloakindia.com/media/catalog/product/l/f/lfs_3_800x500.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair011",
//       "category": "chair",
//       "subcategory": "computer chair",
//       "title": "Royaloak Venice Italian Mesh Computer Chair with Revolving Base",
//       "price": 10990,
//       "rating": 4.5,
//       "img": "https://www.royaloakindia.com/media/catalog/product/l/f/lfs_2_800x500.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair012",
//       "category": "chair",
//       "subcategory": "office chair",
//       "title": "Royaloak Venice Italian Mesh Office Chair with Revolving Base",
//       "price": 12499,
//       "rating": 4.6,
//       "img": "https://www.royaloakindia.com/media/catalog/product/l/f/lfs_1_800x500.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair013",
//       "category": "chair",
//       "subcategory": "visitor chair",
//       "title": "Royaloak Texas American Leatherette Visitor Chair",
//       "price": 6990,
//       "rating": 4.2,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/h/chair_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair014",
//       "category": "chair",
//       "subcategory": "computer chair",
//       "title": "Royaloak Texas American Leatherette Computer Chair",
//       "price": 10500,
//       "rating": 4.4,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/h/chair_2_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     },
//     {
//       "id": "chair015",
//       "category": "chair",
//       "subcategory": "office chair",
//       "title": "Royaloak Texas American Leatherette Office Chair",
//       "price": 13000,
//       "rating": 4.5,
//       "img": "https://www.royaloakindia.com/media/catalog/product/c/h/chair_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=480&canvas=480:300"
//     }
//   ]
// };

// // Reducer
// const chairsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // Add cases for actions if needed in future
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

import { createStore, combineReducers } from 'redux';

const initialHomepageState = {
  categories: [
    { id: 1, title: 'Chairs', description: 'Description for Category 1' },
    { id: 2, title: 'Sofas', description: 'Description for Category 2' },
    { id: 3, title: 'Tables', description: 'Description for Category 3' },
    { id: 4, title: 'Wardrobes', description: 'Description for Category 4' },
    { id: 5, title: 'Curtains', description: 'Description for Category 5' },
  ],
};

const homepageReducer = (state = initialHomepageState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  homepage: homepageReducer,
});

const store = createStore(rootReducer);

export default store;
