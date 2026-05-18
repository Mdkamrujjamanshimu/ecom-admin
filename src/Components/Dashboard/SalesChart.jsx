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
    <div className="rounded-[28px] border border-slate-200/75 dark:border-slate-700/75 bg-white dark:bg-slate-900 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.24)] dark:shadow-black/25 backdrop-blur p-4 sm:p-5 lg:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
        <div>
          <p className="text-sm font-semibold text-slate-950 dark:text-white">
            Sales Overview
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track daily momentum and product demand with premium analytics.
          </p>
        </div>

        <select className="text-sm rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 transition focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-[240px] sm:h-[280px] md:h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              opacity={0.8}
            />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#64748b" }}
              width={35}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                boxShadow: "0 18px 50px rgba(15,23,42,0.2)",
              }}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366f1"
              strokeWidth={4}
              dot={{ r: 4, fill: "#ffffff", stroke: "#6366f1", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
