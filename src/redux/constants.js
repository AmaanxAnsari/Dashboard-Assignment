export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGOUT = "LOGOUT";
export const ADD_WIDGET = "ADD_WIDGET";
export const REMOVE_WIDGET = "REMOVE_WIDGET";

/* {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.categoryName}</h3>
          <div className="d-flex">
            {searchedWidgets(category.widgets)
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
      ))} */
