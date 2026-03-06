export default function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm border rounded-xl p-5">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
