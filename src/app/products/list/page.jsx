"use client";

import SearchBox from "@/Components/SearchBox";
import { Button } from "@mui/material";
import React, { useState, useMemo } from "react";
import { MdAddCircle, MdDownload, MdRefresh } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";

const productData = [
  {
    id: "#PRO-001",
    name: "Marketing Mastery",
    category: "Business",
    price: 200,
    quantity: 20,
    sale: 6,
    stock: "In Stock",
    createdAt: "2024-01-01",
    revenue: "$1.2K",
  },
  {
    id: "#PRO-002",
    name: "Web Design Guide",
    category: "Design",
    price: 150,
    quantity: 15,
    sale: 4,
    stock: "In Stock",
    createdAt: "2024-01-05",
    revenue: "$900",
  },
  {
    id: "#PRO-003",
    name: "JavaScript Basics",
    category: "Programming",
    price: 180,
    quantity: 10,
    sale: 3,
    stock: "Out of Stock",
    createdAt: "2024-01-10",
    revenue: "$540",
  },
  {
    id: "#PRO-004",
    name: "React Advanced",
    category: "Programming",
    price: 250,
    quantity: 25,
    sale: 8,
    stock: "In Stock",
    createdAt: "2024-01-15",
    revenue: "$2.0K",
  },
  {
    id: "#PRO-005",
    name: "UI/UX Principles",
    category: "Design",
    price: 160,
    quantity: 18,
    sale: 5,
    stock: "In Stock",
    createdAt: "2024-01-20",
    revenue: "$1.44K",
  },
  {
    id: "#PRO-006",
    name: "SEO Mastery",
    category: "Marketing",
    price: 120,
    quantity: 30,
    sale: 9,
    stock: "In Stock",
    createdAt: "2024-01-25",
    revenue: "$1.62K",
  },
];

const ProductListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return productData
      .filter((item) => {
        const searchMatch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.id.toLowerCase().includes(searchQuery.toLowerCase());
        return searchMatch;
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const isAllSelected =
    currentItems.length > 0 && selectedIds.length === currentItems.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
      return;
    }
    setSelectedIds(currentItems.map((item) => item.id));
  };

  const toggleSelectItem = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const totalRevenue = productData
    .reduce(
      (sum, p) =>
        sum + parseFloat(p.revenue.replace("$", "").replace("K", "000")),
      0,
    )
    .toLocaleString();

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Premium Header Section */}
      <div className="rounded-[2rem] border border-slate-200/40 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:shadow-2xl dark:shadow-slate-900/40">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-cyan-300/80">
              Premium Products Management
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
              Product Inventory Dashboard
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Manage your complete product catalog with advanced analytics,
              real-time inventory tracking, and premium controls designed for
              optimal e-commerce administration and performance insights.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-300/50 bg-white/60 p-5 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-xl dark:shadow-slate-900/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
                Total Products
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                {productData.length}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-300/50 bg-white/60 p-5 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-xl dark:shadow-slate-900/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
                In Stock
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                {productData.filter((p) => p.stock === "In Stock").length}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-300/50 bg-white/60 p-5 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-xl dark:shadow-slate-900/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
                Total Revenue
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                ${totalRevenue}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Controls Section */}
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        {/* Left Column - Search & Info */}
        <div className="rounded-[2rem] border border-slate-200/10 bg-slate-50/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-700/40 dark:bg-slate-950/70">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Product Overview
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Browse and manage your premium product collection with real-time
                analytics and inventory control.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700">
                Analytics
              </Button>
              <Button className="rounded-2xl border border-slate-200 bg-transparent px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900">
                Sync Inventory
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Selected",
                value: selectedIds.length,
                accent: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
              },
              {
                label: "Search Query",
                value: searchQuery || "All Products",
                accent:
                  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
              },
              {
                label: "Page Info",
                value: `${currentPage}/${Math.max(totalPages, 1)}`,
                accent: "bg-purple-500/10 text-purple-600 dark:text-purple-300",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-3xl border border-slate-200/70 bg-white p-4 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-950"
              >
                <p className="font-medium text-slate-500 dark:text-slate-400">
                  {card.label}
                </p>
                <p
                  className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${card.accent}`}
                >
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <SearchBox
              placeholder="Search products by name or ID..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="rounded-3xl border border-slate-200/70 bg-slate-100 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <p className="font-semibold">Product Management System</p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Advanced inventory management with real-time stock tracking,
                revenue analytics, and premium category organization for optimal
                e-commerce operations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700">
                <MdDownload className="mr-2" />
                Export
              </Button>
              <Button className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                <MdRefresh className="mr-2" /> Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Quick Actions */}
        <div className="rounded-[2rem] border border-slate-200/10 bg-slate-50/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-700/40 dark:bg-slate-950/70">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-600 dark:text-cyan-300/80">
              Premium Operations
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Quick Actions
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Essential tools for product management. Add, edit, delete, and
              organize your product catalog with premium admin controls.
            </p>
          </div>
          <div className="mt-6 grid gap-4">
            <Link href="/products/add" className="block">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-5 hover:from-indigo-500/15 hover:to-cyan-500/15 transition cursor-pointer">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  ➕ Add New Product
                </p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Create a new premium product entry
                </p>
              </div>
            </Link>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Top Performers</p>
              <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {productData.filter((p) => p.sale >= 5).length} High-Sale Items
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Stock Status</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                  In Stock
                </span>
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-600 dark:text-red-300">
                  Out of Stock
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Table Section */}
      <div className="rounded-[2rem] border border-slate-200/10 bg-white shadow-2xl shadow-slate-900/5 dark:border-slate-700/40 dark:bg-slate-950 dark:text-slate-100">
        <div className="flex flex-col gap-4 border-b border-slate-200/70 px-6 py-5 dark:border-slate-700/40 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Products Table
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Product Catalog
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span>{`${filteredData.length} total products`}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-500" />
            <span>{`Page ${currentPage} of ${Math.max(totalPages, 1)}`}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1000px] w-full border-collapse text-sm">
            <thead className="bg-slate-950 text-slate-300 dark:bg-slate-900">
              <tr>
                <th className="px-5 py-4 text-left">
                  <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={toggleSelectAll}
                      className="h-4 w-4 rounded border-slate-400 text-cyan-500"
                    />
                    Select
                  </label>
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Product Name
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  ID
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Category
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Price
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Quantity
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Stock
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Revenue
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Created
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-200/80 bg-white text-slate-800 transition hover:bg-slate-50 dark:border-slate-700/60 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                  >
                    <td className="px-5 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(item.id)}
                        onChange={() => toggleSelectItem(item.id)}
                        className="h-4 w-4 rounded border-slate-300 text-cyan-500"
                      />
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-mono text-slate-500 dark:text-slate-400">
                      {item.id}
                    </td>
                    <td className="px-5 py-4">{item.category}</td>
                    <td className="px-5 py-4 font-semibold text-amber-600 dark:text-amber-400">
                      ৳{item.price}
                    </td>
                    <td className="px-5 py-4">{item.quantity}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                          item.stock === "In Stock"
                            ? "bg-emerald-100/80 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200"
                            : "bg-red-100/80 text-rose-700 dark:bg-red-500/15 dark:text-rose-200"
                        }`}
                      >
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-900 dark:text-slate-100">
                      {item.revenue}
                    </td>
                    <td className="px-5 py-4">{item.createdAt}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3 text-lg text-slate-600 dark:text-slate-300">
                        <Link href="/products/edit">
                          <FiEdit className="cursor-pointer hover:text-blue-500 transition" />
                        </Link>
                        <RiDeleteBin5Line className="cursor-pointer hover:text-rose-500 transition" />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={10}
                    className="py-12 text-center text-slate-500 dark:text-slate-400"
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Premium Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center gap-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-2xl font-semibold transition duration-300 ${
                currentPage === i + 1
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white"
                  : "bg-slate-200/80 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
