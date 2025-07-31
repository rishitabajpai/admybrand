"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { mockChartData } from "../utils/mockData";

export default function RevenueChart() {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
      <h3 className="mb-2 font-semibold">Revenue Line Chart</h3>
      <LineChart width={400} height={250} data={mockChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
      </LineChart>
    </div>
  );
}