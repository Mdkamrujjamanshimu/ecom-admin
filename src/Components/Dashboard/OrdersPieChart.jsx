"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 400 },
  { name: "Pending", value: 200 },
  { name: "Cancelled", value: 100 },
];

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export default function OrdersPieChart() {
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
        Order Status
      </h2>

      {/* Chart */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              innerRadius={40}
              paddingAngle={2}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
