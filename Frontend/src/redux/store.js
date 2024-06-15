import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; 
import chairReducer from "./reducers/chairReducer";

const rootReducer = combineReducers({
  chairs: chairReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
