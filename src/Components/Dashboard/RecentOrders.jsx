const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "12 Jan 2026",
    amount: "1200",
    status: "Completed",
  },
  {
    id: "ORD-002",
    customer: "Alex Smith",
    date: "11 Jan 2026",
    amount: "800",
    status: "Pending",
  },
  {
    id: "ORD-003",
    customer: "Michael Lee",
    date: "10 Jan 2026",
    amount: "680",
    status: "Cancelled",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white dark:bg-gray-900 border rounded-xl p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-2">Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-3">#{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td>
                  <span className="px-2 py-1 rounded-md text-xs bg-gray-200 dark:bg-gray-800">
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
