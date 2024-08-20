import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import categories from "../data/category";
import categoriesReducer from "./widgetReducer";

const initializeLocalStorage = () => {
  if (!localStorage.getItem("categories")) {
    localStorage.setItem("categories", JSON.stringify(categories));
  }
};

initializeLocalStorage();

const initialCategories = JSON.parse(localStorage.getItem("categories")) || [];

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

const store = createStore(
  rootReducer,
  { categories: initialCategories },
  applyMiddleware(thunk)
);
export default store;
