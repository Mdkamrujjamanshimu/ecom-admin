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
    <div
      className="
      rounded-2xl
      border border-gray-200 dark:border-gray-800
      bg-white/70 dark:bg-gray-900/70
      backdrop-blur
      p-4 sm:p-5 lg:p-6
      "
    >
      {/* Header */}
      <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
        Monthly Revenue
      </h2>

      {/* Chart */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />

            <YAxis tick={{ fontSize: 12 }} width={35} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="revenue"
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
              barSize={25}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
