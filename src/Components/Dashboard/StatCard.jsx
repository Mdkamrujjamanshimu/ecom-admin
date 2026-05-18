import { TrendingUp } from "lucide-react";

export default function StatCard({ title, value, growth }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-200/75 dark:border-slate-700/75 bg-white dark:bg-slate-900 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.25)] dark:shadow-black/20 backdrop-blur p-6 transition-all hover:-translate-y-1">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 opacity-80"></div>
      <div className="relative flex justify-between items-start gap-4">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {value}
          </h3>
          <span className="inline-flex items-center gap-2 mt-3 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <TrendingUp size={14} />
            {growth}
          </span>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-50 text-slate-900 shadow-sm dark:bg-slate-800 dark:text-slate-100">
          ৳
        </div>
      </div>
    </div>
  );
}
