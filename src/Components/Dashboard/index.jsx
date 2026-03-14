import StatCard from "./StatCard";
import SalesChart from "./SalesChart";
import RevenueChart from "./RevenueChart";
import OrdersPieChart from "./OrdersPieChart";
import RecentOrders from "./RecentOrders";
import ActivityTimeline from "./ActivityTimeline";

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard title="Total Sales" value="1,250" growth="+12%" />
        <StatCard title="Total Books" value="350" growth="+5%" />
        <StatCard title="Total Orders" value="875" growth="+8%" />
        <StatCard title="Total Customers" value="640" growth="+15%" />
      </div>

      <SalesChart />

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
