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
    <div className="rounded-[28px] border border-slate-200/75 dark:border-slate-700/75 bg-white dark:bg-slate-900 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.24)] dark:shadow-black/25 backdrop-blur p-4 sm:p-5 lg:p-6">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <p className="text-base font-semibold text-slate-950 dark:text-white">
          Order Status
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Order distribution and fulfillment insights.
        </p>
      </div>

      {/* Chart */}
      <div className="w-full h-[240px] sm:h-[280px] md:h-[340px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={88}
              innerRadius={45}
              paddingAngle={4}
              label={{ fill: "#475569", fontSize: 12 }}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 18px 50px rgba(15,23,42,0.2)",
              }}
              itemStyle={{ color: "#fff" }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Total
            </p>
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">
              700
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
