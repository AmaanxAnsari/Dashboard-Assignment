import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./authReducer";
import categories from "../data/category";
import categoriesReducer from "./widgetReducer";

if (!localStorage.getItem("categories")) {
  localStorage.setItem("categories", JSON.stringify(categories));
}

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
