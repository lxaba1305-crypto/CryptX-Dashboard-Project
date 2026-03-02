import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceArea
} from "recharts";

const data = [
  { name: "Jan", value: 540 },
  { name: "Mar", value: 700 },
  { name: "May", value: 580 },
  { name: "Jul", value: 620 },
  { name: "Sep", value: 400 },
  { name: "Nov", value: 750 },
];

const CustomTooltip = ({ active }) => {
  if (active) {
    return (
      <div className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
        $25,240
      </div>
    );
  }
  return null;
};

const Graph = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        BTC Prices
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid vertical={false} stroke="#f3f4f6" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
            />

            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#6366f1", strokeWidth: 1 }} />

            <Line
              type="linear"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 5, fill: "#6366f1" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
