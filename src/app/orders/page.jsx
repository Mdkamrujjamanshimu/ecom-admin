"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@mui/material";
import { FiEye, FiMapPin, FiRefreshCcw, FiSearch, FiSliders } from "react-icons/fi";
import SearchBox from "@/Components/SearchBox";
import Link from "next/link";

const initialOrders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    price: 2000,
    quantity: 3,
    status: "Paid",
    paymentStatus: "Paid",
    createdAt: "2024-01-01",
  },
  {
    id: "#ORD-002",
    customer: "Sarah Khan",
    price: 1500,
    quantity: 2,
    status: "Processing",
    paymentStatus: "Pending",
    createdAt: "2024-01-05",
  },
  {
    id: "#ORD-003",
    customer: "Michael Lee",
    price: 3500,
    quantity: 5,
    status: "Paid",
    paymentStatus: "Paid",
    createdAt: "2024-01-08",
  },
  {
    id: "#ORD-004",
    customer: "David Smith",
    price: 1000,
    quantity: 1,
    status: "Cancelled",
    paymentStatus: "Refunded",
    createdAt: "2024-01-10",
  },
];

const statusOptions = ["All", "Paid", "Processing", "Cancelled"];
const paymentOptions = ["All", "Paid", "Pending", "Refunded"];
const sortOptions = ["Latest", "Oldest", "High value", "Low value"];

const page = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const summary = useMemo(() => {
    const totalOrders = orders.length;
    const pending = orders.filter((order) => order.status === "Processing" || order.paymentStatus === "Pending").length;
    const completed = orders.filter((order) => order.status === "Paid" && order.paymentStatus === "Paid").length;
    const revenue = orders.reduce((sum, order) => sum + order.price, 0);

    return {
      totalOrders,
      pending,
      completed,
      revenue,
    };
  }, [orders]);

  const averageOrderValue = useMemo(() => {
    return summary.totalOrders ? summary.revenue / summary.totalOrders : 0;
  }, [summary.revenue, summary.totalOrders]);

  const filteredData = orders
    .filter((order) => {
      const searchText = searchQuery.trim().toLowerCase();
      const matchesSearch =
        order.customer.toLowerCase().includes(searchText) ||
        order.id.toLowerCase().includes(searchText);
      const matchesStatus = statusFilter === "All" || order.status === statusFilter;
      const matchesPayment = paymentFilter === "All" || order.paymentStatus === paymentFilter;
      return matchesSearch && matchesStatus && matchesPayment;
    })
    .sort((a, b) => {
      if (sortBy === "High value") return b.price - a.price;
      if (sortBy === "Low value") return a.price - b.price;
      if (sortBy === "Oldest") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  /**
   * @param {string} status
   */
  const getStatusBadge = (status) => {
    /** @type {{[key:string]: string}} */
    const mapping = {
      Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",
      Processing: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200",
      Cancelled: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-200",
    };
    return mapping[status] || "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
  };

  /**
   * @param {string} paymentStatus
   */
  const getPaymentBadge = (paymentStatus) => {
    /** @type {{[key:string]: string}} */
    const mapping = {
      Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",
      Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200",
      Refunded: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-200",
    };
    return mapping[paymentStatus] || "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
  };

  return (
    <div className="p-2 sm:p-4 lg:p-4 space-y-6">
      <div className="rounded-[32px] border border-slate-200/80 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-8 shadow-2xl shadow-slate-950/10 overflow-hidden">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-amber-500/90 dark:text-amber-300/80">Book order dashboard</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-slate-950 dark:text-white">Book order management</h1>
            <p className="mt-4 max-w-3xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Track book orders, monitor payment status, and manage shipment workflows for a smooth bookstore operation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:auto-cols-fr lg:grid-flow-col">
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 px-6 py-5 shadow-xl shadow-slate-950/10 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Live orders</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{summary.totalOrders}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Current order volume in the pipeline.</p>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 px-6 py-5 shadow-xl shadow-slate-950/10 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Revenue</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">৳ {summary.revenue.toLocaleString()}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Net confirmed order value.</p>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 px-6 py-5 shadow-xl shadow-slate-950/10 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Avg order value</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">৳ {averageOrderValue.toFixed(0)}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Order benchmark across live sales.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Core insights</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">Order performance overview</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <FiRefreshCcw /> Updated: Today
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Pending</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{summary.pending}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Awaiting fulfillment or payment action.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Completed</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{summary.completed}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Orders fully settled and archived.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Avg order value</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">৳ {averageOrderValue.toFixed(0)}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Benchmark value per confirmed order.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Processing ratio</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{summary.totalOrders ? Math.round((summary.pending / summary.totalOrders) * 100) : 0}%</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Orders still in workflow.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-950">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Search panel</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Refine your order feed</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700">
                <FiSliders className="mr-2" /> Filters
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <SearchBox
              placeholder="Search order ID, customer or amount"
              width="100%"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <select
                value={statusFilter}
                onChange={(/** @type {React.ChangeEvent<HTMLSelectElement>} */ e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={paymentFilter}
                onChange={(/** @type {React.ChangeEvent<HTMLSelectElement>} */ e) => {
                  setPaymentFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                {paymentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <select
              value={sortBy}
              onChange={(/** @type {React.ChangeEvent<HTMLSelectElement>} */ e) => setSortBy(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-2xl shadow-slate-950/10 dark:border-slate-700 dark:bg-slate-950">
        <div className="flex flex-col gap-4 border-b border-slate-200/80 bg-slate-50 px-6 py-5 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Order ledger</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Latest customer orders</h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex h-9 items-center rounded-full bg-emerald-100 px-3 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200">Live</div>
              <div className="inline-flex h-9 items-center rounded-full bg-slate-100 px-3 text-slate-700 dark:bg-slate-800 dark:text-slate-300">{currentItems.length} shown</div>
              <Button className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900">
                Export CSV
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 text-sm text-left text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-950 text-slate-300">
              <tr>
                {[
                  "Order",
                  "Customer",
                  "Amount",
                  "Qty",
                  "Status",
                  "Payment",
                  "Created",
                  "Actions",
                ].map((label) => (
                  <th key={label} className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {currentItems.length > 0 ? (
                currentItems.map((order) => (
                  <tr key={order.id} className="transition hover:bg-slate-50 dark:hover:bg-slate-900">
                    <td className="whitespace-nowrap px-6 py-5">
                      <Link href="/orders/details" className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                        {order.id}
                      </Link>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-medium text-slate-900 dark:text-white">{order.customer}</p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Order by customer</p>
                    </td>
                    <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">৳ {order.price.toLocaleString()}</td>
                    <td className="px-6 py-5">{order.quantity}</td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex rounded-full px-3 py-2 text-xs font-semibold ${getStatusBadge(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex rounded-full px-3 py-2 text-xs font-semibold ${getPaymentBadge(order.paymentStatus)}`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-5">{order.createdAt}</td>
                    <td className="px-6 py-5 space-y-2">
                      <Link href="/orders/details">
                        <Button className="w-full rounded-2xl bg-slate-900 px-3 py-2 text-xs text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700">
                          <FiEye className="mr-2" /> View
                        </Button>
                      </Link>
                      <Link href="/orders/tracking" className="w-full block">
                        <Button className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900">
                          <FiMapPin className="mr-2" /> Track Order
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-10 text-center text-slate-500 dark:text-slate-400">
                    No orders found. Adjust your filters or refresh the dashboard.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-950">
          <p className="text-sm text-slate-500 dark:text-slate-400">Showing {currentItems.length} of {filteredData.length} matching orders</p>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-2xl text-sm ${currentPage === i + 1
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
