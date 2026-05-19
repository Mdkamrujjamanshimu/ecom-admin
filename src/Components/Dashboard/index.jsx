import StatCard from "./StatCard";
import SalesChart from "./SalesChart";
import RevenueChart from "./RevenueChart";
import OrdersPieChart from "./OrdersPieChart";
import RecentOrders from "./RecentOrders";
import ActivityTimeline from "./ActivityTimeline";
import {
  FiTrendingUp,
  FiUsers,
  FiShoppingCart,
  FiBook,
  FiPlus,
  FiSearch,
  FiSettings,
  FiBarChart,
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

export default function DashboardPage() {
  return (
    <div className="p-2 sm:p-4 lg:p-4 min-h-screen space-y-6">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden rounded-[32px] border border-slate-200/70 dark:border-slate-700/70 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.25)] dark:shadow-black/30 p-6 lg:p-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Book Store Admin Panel
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950 dark:text-white mb-4">
            Book Sales Management Dashboard
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Comprehensive analytics for book inventory management, sales
            performance tracking, customer order processing, and revenue
            insights designed for efficient bookstore administration.
          </p>
        </div>

        {/* Enhanced KPI Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-5 shadow-sm backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <FiTrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                  +18.4%
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 mb-2">
                Today's book sales
              </p>
              <p className="text-2xl font-bold text-slate-950 dark:text-white mb-1">
                ৳ 24.8K
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-5 shadow-sm backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <FiUsers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 mb-2">
                Active book buyers
              </p>
              <p className="text-2xl font-bold text-slate-950 dark:text-white mb-1">
                3,145
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-1.5 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-5 shadow-sm backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <FiShoppingCart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                  6.8%
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 mb-2">
                Book purchase rate
              </p>
              <p className="text-2xl font-bold text-slate-950 dark:text-white mb-1">
                6.8%
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-1.5 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-5 shadow-sm backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <FiBook className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-full">
                  92%
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 mb-2">
                Inventory level
              </p>
              <p className="text-2xl font-bold text-slate-950 dark:text-white mb-1">
                92%
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-1.5 rounded-full w-11/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="group relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-900 p-6 shadow-sm backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FiPlus className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-950 dark:text-white mb-1">
              Add New Book
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Expand your catalog
            </p>
          </div>
        </button>

        <button className="group relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-900 p-6 shadow-sm backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FiSearch className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-950 dark:text-white mb-1">
              Search Books
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Find specific titles
            </p>
          </div>
        </button>

        <button className="group relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-900 p-6 shadow-sm backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FiBarChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-950 dark:text-white mb-1">
              View Reports
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Detailed analytics
            </p>
          </div>
        </button>

        <button className="group relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-900 p-6 shadow-sm backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FiSettings className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-950 dark:text-white mb-1">
              Settings
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Configure system
            </p>
          </div>
        </button>
      </section>

      {/* Alerts & Notifications */}
      <section className="rounded-[28px] border border-amber-200/70 dark:border-amber-700/70 bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:from-amber-950/20 dark:to-orange-950/20 p-6 shadow-sm backdrop-blur">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
            <FiAlertCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-950 dark:text-white mb-2">
              System Alerts
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-600 dark:text-slate-300">
                  All systems operational
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiClock className="w-4 h-4 text-amber-600" />
                <span className="text-slate-600 dark:text-slate-300">
                  3 low stock alerts pending review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard title="Total Sales" value="1,250" growth="+12%" />
        <StatCard title="Total Books" value="350" growth="+5%" />
        <StatCard title="Total Orders" value="875" growth="+8%" />
        <StatCard title="Total Customers" value="640" growth="+15%" />
      </div>

      {/* Advanced Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="space-y-6">
          {/* Top Categories */}
          <div className="rounded-[28px] border border-slate-200/75 dark:border-slate-700/75 bg-white dark:bg-slate-900 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.24)] dark:shadow-black/25 backdrop-blur p-6">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white mb-4">
              Top Categories
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "Fiction",
                  sales: 45,
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  name: "Non-Fiction",
                  sales: 32,
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  name: "Science",
                  sales: 28,
                  color: "from-purple-500 to-pink-600",
                },
                {
                  name: "History",
                  sales: 22,
                  color: "from-amber-500 to-orange-600",
                },
              ].map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                    ></div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {category.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        style={{ width: `${category.sales}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-slate-950 dark:text-white w-8">
                      {category.sales}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="rounded-[28px] border border-slate-200/75 dark:border-slate-700/75 bg-white dark:bg-slate-900 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.24)] dark:shadow-black/25 backdrop-blur p-6">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white mb-4">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                <FiBook className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-slate-950 dark:text-white">
                  156
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Books Added Today
                </p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
                <FiUsers className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-slate-950 dark:text-white">
                  89
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  New Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueChart />
        <OrdersPieChart />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentOrders />
        </div>

        <ActivityTimeline />
      </div>
    </div>
  );
}
