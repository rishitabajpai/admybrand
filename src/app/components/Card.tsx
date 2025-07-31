export default function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 shadow rounded-2xl">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}