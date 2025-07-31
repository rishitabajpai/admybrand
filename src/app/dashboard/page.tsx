
import MetricCard from "../components/Card";
import RevenueChart from "../components/Chart";
import RevenueBarChart from "../components/BarChart";
import RevenuePieChart from "../components/PieChart";
import DataTable from "../components/DataTable";
import { mockMetrics } from "../utils/mockData";

export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">ADmyBRAND Insights Dashboard</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {mockMetrics.map((metric, i) => (
          <MetricCard key={i} title={metric.title} value={metric.value} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <RevenueChart />
        <RevenueBarChart />
        <RevenuePieChart />
      </div>

      {/* Data Table */}
      <DataTable />
    </main>
  );
}