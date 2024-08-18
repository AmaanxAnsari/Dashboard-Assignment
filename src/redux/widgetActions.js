import { ADD_WIDGET, REMOVE_WIDGET } from "./constants";

export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget },
});

export const removeWidget = (categoryId, updatedWidgets) => ({
  type: REMOVE_WIDGET,
  payload: { categoryId, updatedWidgets },
});
