import React from "react";

const WidgetCards = ({ widgets }) => {
  return (
    <>
      <div key={widgets.id} className="d-flex">
        <div className="card text-center" style={{ width: " 18rem" }}>
          <div className="card-body ">
            <h5 className="card-title">{widgets.title}</h5>
            <p className="card-text">{widgets.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetCards;
