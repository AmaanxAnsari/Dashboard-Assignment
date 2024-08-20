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
        <Navbar handleSearchChange={handleSearchChange} search={search} />
        <div className="container mt-3">
          <h4 className="ms-2">CNAPP Dashboard</h4>
          <WidgetContainer search={search} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
