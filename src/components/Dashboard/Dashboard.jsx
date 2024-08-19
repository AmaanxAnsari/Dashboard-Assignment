import React, { useState } from "react";
import WidgetContainer from "../Widget/WidgetContainer";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <section
        className="desktop-only"
        style={{ backgroundColor: "var(--background-blue03)" }}
      >
        <Navbar />
        <div className="container mt-3">
          <h4 className="ms-2">CNAPP Dashboard</h4>

          {/* <input
            type="text"
            id=""
            value={search}
            onChange={handleSearchChange}
          /> */}
          <WidgetContainer search={search} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
