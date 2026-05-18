"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 400 },
  { month: "Feb", revenue: 700 },
  { month: "Mar", revenue: 500 },
  { month: "Apr", revenue: 900 },
  { month: "May", revenue: 650 },
  { month: "Jun", revenue: 1000 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-[28px] border border-slate-200/75 dark:border-slate-700/75 bg-white dark:bg-slate-900 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.24)] dark:shadow-black/25 backdrop-blur p-4 sm:p-5 lg:p-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
        <div>
          <p className="text-base font-semibold text-slate-950 dark:text-white">
            Monthly Revenue
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Clear revenue trends presented in a professional premium style.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700 dark:bg-sky-900/25 dark:text-sky-300">
          +24% growth
        </span>
      </div>

      {/* Chart */}
      <div className="w-full h-[240px] sm:h-[280px] md:h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              opacity={0.8}
            />

            <XAxis
              dataKey="month"
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

            <Bar
              dataKey="revenue"
              fill="#8b5cf6"
              radius={[10, 10, 0, 0]}
              barSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
