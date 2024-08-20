import { ADD_WIDGET, REMOVE_WIDGET } from "./constants";

const initialCategories = JSON.parse(localStorage.getItem("categories")) || [];

const categoriesReducer = (state = initialCategories, action) => {
  switch (action.type) {
    case ADD_WIDGET: {
      const { categoryId, widget } = action.payload;
      const newState = state.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: [...category.widgets, widget],
          };
        }
        return category;
      });
      localStorage.setItem("categories", JSON.stringify(newState));
      return newState;
    }

    case REMOVE_WIDGET: {
      const { categoryId, updatedWidgets } = action.payload;
      const newState = state.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: updatedWidgets,
          };
        }
        return category;
      });
      localStorage.setItem("categories", JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
};

export default categoriesReducer;
