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
    <div
      className="
      rounded-2xl
      border border-gray-200 dark:border-gray-800
      bg-white dark:bg-gray-800
      backdrop-blur
      p-4 sm:p-5 lg:p-6
      "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <h2 className="text-base sm:text-lg font-semibold">Sales Overview</h2>

        <select className="text-sm border rounded-md px-3 py-1.5 bg-white dark:bg-gray-800 w-full sm:w-auto">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />

            <YAxis tick={{ fontSize: 12 }} width={35} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
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
