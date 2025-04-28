import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "Taj Mahal", visitors: 20000 },
  { name: "Gateway of India", visitors: 15000 },
  { name: "Red Fort", visitors: 10000 },
];

const pieData = [
  { name: "Domestic", value: 70 },
  { name: "International", value: 30 },
];

const COLORS = ["#0088FE", "#FFBB28"];

const Charts = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Visitor Analysis</h2>
      
      {/* Bar Chart */}
      <BarChart width={400} height={250} data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="visitors" fill="#82ca9d" />
      </BarChart>

      {/* Pie Chart */}
      <PieChart width={400} height={250}>
        <Pie data={pieData} dataKey="value" outerRadius={80}>
          {pieData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Charts;
