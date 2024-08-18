import React from "react";
import WidgetContainer from "../Widget/WidgetContainer";
import category from "../../data/category";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <WidgetContainer category={category} />
    </>
  );
};

export default Dashboard;
