import React, { useState } from "react";
import WidgetCards from "./WidgetCards";
import { useSelector } from "react-redux";

import AddWidget from "./AddWidget";

const WidgetContainer = ({ search }) => {
  const categories = useSelector((state) => state.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleModal = (category) => {
    setSelectedCategory(category);
  };

  const searchedWidgets = (widgets) => {
    return widgets.filter((widget) =>
      widget.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <>
      <div className="container">
        {categories.map((category) => {
          const filteredWidgets = searchedWidgets(category.widgets).filter(
            (widget) => widget.isChecked
          );

          return (
            <div
              className="rounded-3 p-2 mb-2 overflow-x-auto shadow-sm"
              key={category.id}
              style={{ backgroundColor: "var(--background-blue02)" }}
            >
              <h6 className="m-2 mb-0">{category.categoryName} Dashboard</h6>

              <div className="d-flex">
                {filteredWidgets.length > 0 ? (
                  filteredWidgets.map((filteredWidget) => (
                    <WidgetCards
                      key={filteredWidget.id}
                      widgets={filteredWidget}
                    />
                  ))
                ) : (
                  <div
                    className="card m-2 shadow-sm border-0"
                    style={{ width: "18rem", height: "10rem" }}
                  >
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <h5>No Widgets Found</h5>
                    </div>
                  </div>
                )}
                <div>
                  <div
                    className="card m-2 border-0 shadow-sm zoom"
                    style={{ width: "18rem", height: "10rem" }}
                  >
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-toggle="modal"
                        data-bs-target="#AddWidgetModal"
                        onClick={() => handleModal(category)}
                        style={{ border: "1px dashed grey" }}
                      >
                        + Add Widget
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <AddWidget
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </>
  );
};

export default WidgetContainer;
