import { TrendingUp } from "lucide-react";

export default function StatCard({ title, value, growth }) {
  return (
    <div
      className="relative rounded-2xl border border-gray-200 dark:border-gray-800
    bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 backdrop-blur p-6
    hover:shadow-xl transition"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h3 className="text-3xl font-bold mt-1">{value}</h3>

          <span className="text-xs text-green-500 flex items-center gap-1 mt-2">
            <TrendingUp size={14} />
            {growth}
          </span>
        </div>

        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl
        bg-blue-100 dark:bg-blue-900/30 text-blue-600"
        >
          ৳
        </div>
      </div>
    </div>
  );
}
