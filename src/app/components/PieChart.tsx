"use client";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { mockChartData } from "../utils/mockData";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function RevenuePieChart() {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
      <h3 className="mb-2 font-semibold">Revenue Pie Chart</h3>
      <PieChart width={400} height={250}>
        <Pie
          data={mockChartData}
          dataKey="revenue"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {mockChartData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}