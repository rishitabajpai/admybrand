export default function DataTable() {
  const rows = [
    { id: 1, name: "Campaign A", clicks: 320, revenue: "$2,300" },
    { id: 2, name: "Campaign B", clicks: 210, revenue: "$1,500" },
    { id: 3, name: "Campaign C", clicks: 410, revenue: "$3,200" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow">
      <h3 className="mb-2 font-semibold">Campaign Data</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Clicks</th>
            <th className="p-2 text-left">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-300 dark:border-gray-700">
              <td className="p-2">{row.id}</td>
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.clicks}</td>
              <td className="p-2">{row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}