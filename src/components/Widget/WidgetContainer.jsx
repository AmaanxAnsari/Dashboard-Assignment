import React, { useEffect, useState } from "react";
import WidgetCards from "./WidgetCards";
import { useSelector, useDispatch } from "react-redux";
import { addWidget, removeWidget } from "../../redux/widgetActions";

const WidgetContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedWidgets, setUpdatedWidgets] = useState([]);

  const [formData, setFormData] = useState({
    widgetName: "",
    widgetText: "",
  });

  const handleModal = (category) => {
    setSelectedCategory(category);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (widgetId) => {
    setUpdatedWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === widgetId
          ? { ...widget, isChecked: !widget.isChecked }
          : widget
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory) {
      const newWidget = {
        id: selectedCategory.widgets.length + 1,
        title: formData.widgetName,
        description: formData.widgetText,
        isChecked: false,
      };

      dispatch(addWidget(selectedCategory.id, newWidget));

      setFormData({
        widgetName: "",
        widgetText: "",
      });

      setSelectedCategory((prevCategory) => ({
        ...prevCategory,
        widgets: [...prevCategory.widgets, newWidget],
      }));
    }
  };
  const handleSaveChanges = () => {
    if (selectedCategory) {
      dispatch(removeWidget(selectedCategory.id, updatedWidgets));
      setSelectedCategory((prevCategory) => ({
        ...prevCategory,
        widgets: updatedWidgets,
      }));
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      setUpdatedWidgets(selectedCategory.widgets);
    }
  }, [selectedCategory]);

  return (
    <>
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.categoryName}</h3>
          <div className="d-flex">
            {category.widgets
              .filter((widgets) => widgets.isChecked)
              .map((filteredWidget) => (
                <WidgetCards key={filteredWidget.id} widgets={filteredWidget} />
              ))}

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#AddWidgetModal"
                  onClick={() => handleModal(category)}
                >
                  + Add Widget
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        className="modal modal-lg fade"
        id="AddWidgetModal"
        tabIndex="-1"
        aria-labelledby="AddWidgetModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AddWidgetModalLabel">
                {selectedCategory
                  ? `Add widget to ${selectedCategory.categoryName}`
                  : "Add Widget"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Widgets</h6>
                  <ul className="list-group">
                    {selectedCategory &&
                      updatedWidgets.map((widget) => (
                        <li key={widget.id} className="list-group-item">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id={widget.id}
                            checked={widget.isChecked}
                            onChange={() => handleCheckboxChange(widget.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={widget.id}
                          >
                            {widget.title}
                          </label>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="col-md-6">
                  <h6>Add New Widget</h6>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="widgetName" className="form-label">
                        Widget Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="widgetName"
                        placeholder="Enter widget name"
                        name="widgetName"
                        value={formData.widgetName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="widgetText" className="form-label">
                        Widget Text
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="widgetText"
                        name="widgetText"
                        placeholder="Enter widget name"
                        value={formData.widgetText}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save Widget
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSaveChanges}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetContainer;
