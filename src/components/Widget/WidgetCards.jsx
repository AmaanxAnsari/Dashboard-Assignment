import React from "react";

const WidgetCards = ({ widgets }) => {
  return (
    <>
      <div key={widgets.id} className="d-flex">
        <div
          className="card text-center m-2 shadow-sm border-0 zoom"
          style={{ width: " 18rem", height: "10rem" }}
        >
          <div className="card-body d-grid align-items-center">
            <h5 className="card-title">{widgets.title}</h5>
            <p className="card-text">{widgets.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetCards;
