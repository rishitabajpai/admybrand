"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { mockChartData } from "../utils/mockData";

export default function RevenueBarChart() {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
      <h3 className="mb-2 font-semibold">Revenue Bar Chart</h3>
      <BarChart width={400} height={250} data={mockChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#3b82f6" />
      </BarChart>
    </div>
  );
}