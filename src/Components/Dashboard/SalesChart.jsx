"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan 1", sales: 10 },
  { name: "Jan 5", sales: 18 },
  { name: "Jan 8", sales: 12 },
  { name: "Jan 10", sales: 20 },
  { name: "Jan 12", sales: 15 },
  { name: "Jan 15", sales: 27 },
];

export default function SalesChart() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800  rounded-xl p-4 sm:p-5 md:p-6 mt-4 sm:mt-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-base sm:text-lg font-semibold">Sales Overview</h2>

        <select className="border rounded-md px-2 py-1 text-sm cursor-pointer text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 w-full sm:w-auto">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-56 sm:h-64 md:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" tick={{ fontSize: 12 }} />

            <YAxis
              tickFormatter={(value) => `${value}%`}
              tick={{ fontSize: 12 }}
              width={40}
            />

            <Tooltip formatter={(value) => `${value}%`} />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
