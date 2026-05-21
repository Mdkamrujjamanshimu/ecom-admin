const activities = [
  { id: 1, text: "New order placed", time: "2 min ago" },
  { id: 2, text: "New customer registered", time: "10 min ago" },
  { id: 3, text: "Order shipped", time: "30 min ago" },
  { id: 4, text: "New product added", time: "1 hour ago" },
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-[28px] border border-slate-200/75 dark:border-slate-700/75 bg-white dark:bg-slate-900 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.24)] dark:shadow-black/25 backdrop-blur p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
          Recent Activity
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          A smart activity feed with clean spacing and modern hierarchy.
        </p>
      </div>

      <div className="space-y-5">
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 rounded-3xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-700/70 dark:bg-slate-950/80"
          >
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/15">
              {item.id}
            </div>
            <div className="min-w-0">
              <p className="font-medium text-slate-900 dark:text-white">
                {item.text}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
