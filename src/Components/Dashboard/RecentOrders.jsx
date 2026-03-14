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
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 backdrop-blur p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="text-left border-b text-gray-500">
            <tr>
              <th className="py-3">Order</th>

              <th>Customer</th>

              <th>Date</th>

              <th>Amount</th>

              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="py-3 font-medium">#{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.date}</td>

                <td>৳ {order.amount}</td>

                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-md ${statusStyles[order.status]}`}
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
