import OrdersPieChart from "./OrdersPieChart";
import RecentOrders from "./RecentOrders";
import RevenueChart from "./RevenueChart";
import SalesChart from "./SalesChart";
import StatCard from "./StatCard";


export default function DashboardPage() {
  return (
    <div className="p-6  min-h-screen">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Total Sales" value="1,250" />
        <StatCard title="Total Books" value="350" />
        <StatCard title="Total Orders" value="875" />
        <StatCard title="Total Customers" value="640" />
      </div>

      {/* Sales Chart */}
      <SalesChart />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RevenueChart />

        <OrdersPieChart />
      </div>

      {/* Orders */}
      <RecentOrders />
    </div>
  );
}
