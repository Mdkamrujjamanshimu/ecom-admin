const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "12 Jan",
    amount: "1200",
    status: "Completed",
  },
  {
    id: "ORD-002",
    customer: "Alex Smith",
    date: "11 Jan",
    amount: "800",
    status: "Pending",
  },
  {
    id: "ORD-003",
    customer: "Michael Lee",
    date: "10 Jan",
    amount: "680",
    status: "Cancelled",
  },
];

const statusStyles = {
  Completed: "bg-green-100 text-green-700 dark:bg-green-900/30",
  Pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30",
  Cancelled: "bg-red-100 text-red-700 dark:bg-red-900/30",
};

export default function RecentOrders() {
  return (
    <div className="rounded-[28px] border border-slate-200/75 dark:border-slate-700/75 bg-white dark:bg-slate-900 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.24)] dark:shadow-black/25 backdrop-blur p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-950 dark:text-white">
            Recent Orders
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            A clean, responsive order list designed for premium dashboards.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          Live updates
        </div>
      </div>

      <div className="overflow-x-auto rounded-[22px] border border-slate-200/60 dark:border-slate-700/60">
        <table className="w-full min-w-[600px] text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.18em] text-slate-500 dark:bg-slate-950 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-200/60 last:border-b-0 transition hover:bg-slate-50 dark:border-slate-700/60 dark:hover:bg-slate-900"
              >
                <td className="px-4 py-4 font-semibold text-slate-900 dark:text-white">
                  #{order.id}
                </td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-300">
                  {order.customer}
                </td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-300">
                  {order.date}
                </td>
                <td className="px-4 py-4 font-medium text-slate-900 dark:text-slate-100">
                  ৳ {order.amount}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
