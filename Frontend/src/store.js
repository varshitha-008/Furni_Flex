import { createStore, combineReducers } from 'redux';

const initialHomepageState = {
  categories: [
    { id: 1, title: 'Category 1', description: 'Description for Category 1' },
    { id: 2, title: 'Category 2', description: 'Description for Category 2' },
    { id: 3, title: 'Category 3', description: 'Description for Category 3' },
    { id: 4, title: 'Category 4', description: 'Description for Category 4' },
    { id: 5, title: 'Category 5', description: 'Description for Category 5' },
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
