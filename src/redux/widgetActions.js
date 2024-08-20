import { ADD_WIDGET, REMOVE_WIDGET, LOAD_CATEGORIES } from "./constants";

export const loadCategories = (categories) => {
  return {
    type: LOAD_CATEGORIES,
    payload: categories,
  };
};

export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget },
});

export const removeWidget = (categoryId, updatedWidgets) => ({
  type: REMOVE_WIDGET,
  payload: { categoryId, updatedWidgets },
});
