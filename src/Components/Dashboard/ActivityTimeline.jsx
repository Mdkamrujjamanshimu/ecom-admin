const activities = [
  { id: 1, text: "New order placed", time: "2 min ago" },
  { id: 2, text: "New customer registered", time: "10 min ago" },
  { id: 3, text: "Order shipped", time: "30 min ago" },
  { id: 4, text: "New product added", time: "1 hour ago" },
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 backdrop-blur p-6">
      <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>

      <ul className="space-y-4">
        {activities.map((item) => (
          <li key={item.id} className="flex gap-3">
            <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>

            <div>
              <p className="text-sm">{item.text}</p>

              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
