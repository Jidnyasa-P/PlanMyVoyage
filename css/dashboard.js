import React from "react";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tourism Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <h2 className="text-lg">Total Visitors</h2>
          <p className="text-2xl">50,000</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <h2 className="text-lg">Top Destination</h2>
          <p className="text-2xl">Taj Mahal</p>
        </div>
      </div>
      <Charts />
    </div>
  );
};

export default Dashboard;
