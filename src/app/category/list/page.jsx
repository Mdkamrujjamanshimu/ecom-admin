"use client";
import SearchBox from "@/Components/SearchBox";
import { Button } from "@mui/material";
import React, { useMemo, useState } from "react";
import { MdAddCircle, MdDownload, MdRefresh } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";

const categoryData = [
  {
    id: "#CAT-001",
    name: "Fiction",
    quantity: 245,
    sale: "$89.4K",
    status: "Active",
    trend: "+22%",
    createdAt: "2024-01-01",
    featured: true,
  },
  {
    id: "#CAT-002",
    name: "Non-Fiction",
    quantity: 189,
    sale: "$67.2K",
    status: "Active",
    trend: "+15%",
    createdAt: "2024-01-05",
    featured: true,
  },
  {
    id: "#CAT-003",
    name: "Mystery & Thriller",
    quantity: 156,
    sale: "$54.8K",
    status: "Active",
    trend: "+28%",
    createdAt: "2024-01-10",
    featured: false,
  },
  {
    id: "#CAT-004",
    name: "Romance",
    quantity: 134,
    sale: "$43.1K",
    status: "Active",
    trend: "+19%",
    createdAt: "2024-02-12",
    featured: false,
  },
  {
    id: "#CAT-005",
    name: "Science Fiction",
    quantity: 98,
    sale: "$38.7K",
    status: "Publish",
    trend: "+12%",
    createdAt: "2024-02-20",
    featured: false,
  },
  {
    id: "#CAT-006",
    name: "Biography",
    quantity: 87,
    sale: "$29.5K",
    status: "Active",
    trend: "+8%",
    createdAt: "2024-03-03",
    featured: true,
  },
  {
    id: "#CAT-007",
    name: "Children's Books",
    quantity: 203,
    sale: "$45.9K",
    status: "Active",
    trend: "+25%",
    createdAt: "2024-03-15",
    featured: false,
  },
  {
    id: "#CAT-008",
    name: "Self-Help",
    quantity: 112,
    sale: "$33.6K",
    status: "Draft",
    trend: "+5%",
    createdAt: "2024-04-01",
    featured: false,
  },
];

export default function CategoryListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return categoryData
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

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[2rem] border border-slate-200/40 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-2xl dark:shadow-slate-900/40">
        <div className="flex max-[1210px]:flex-col gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 dark:text-cyan-300/80">
              Book Category Management
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
              Premium Book Categories
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Comprehensive admin panel for managing book categories in your
              ecommerce platform. Organize your literary collection with
              advanced filtering, analytics, and bulk operations for optimal
              bookstore management.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-300/50 bg-white/60 p-5 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-xl dark:shadow-slate-900/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
                Total Categories
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                {categoryData.length}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-300/50 bg-white/60 p-5 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-xl dark:shadow-slate-900/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
                Active Categories
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                {categoryData.filter((c) => c.status === "Active").length}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-300/50 bg-white/60 p-5 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-xl dark:shadow-slate-900/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
                Total Revenue
              </p>
              <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                $
                {categoryData
                  .reduce(
                    (sum, c) =>
                      sum +
                      parseFloat(c.sale.replace("$", "").replace("K", "000")),
                    0,
                  )
                  .toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <div className="rounded-[2rem] border border-slate-200/10 bg-slate-50/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-700/40 dark:bg-slate-950/70">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Book Categories Overview
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Manage your bookstore's category structure with premium tools
                for organization, analytics, and customer engagement.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
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
                accent: "bg-blue-500/10 text-blue-600",
              },
              {
                label: "Search",
                value: searchQuery || "Live, fast, premium",
                accent: "bg-emerald-500/10 text-emerald-600",
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
              placeholder="Search book categories..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="rounded-3xl border border-slate-200/70 bg-slate-100 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <p className="font-semibold">Book Category Management</p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Organize your bookstore inventory by categories. Track
                performance, manage visibility, and optimize customer discovery
                with featured categories and trend analysis.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
                <MdDownload className="mr-2" />
                Export
              </Button>
              <Button className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                <MdRefresh className="mr-2" /> Refresh
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/10 bg-slate-50/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-slate-700/40 dark:bg-slate-950/70">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-600 dark:text-cyan-300/80">
              Premium Operations
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Bookstore Management
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Advanced tools for literary commerce. Includes category analytics,
              inventory sync, bulk operations, and performance insights for your
              online bookstore.
            </p>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Top Performing</p>
              <p className="mt-3 text-xl font-semibold">
                Fiction category leads with 22% growth this month
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Category Insights</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Bestsellers
                </span>
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                  High Demand
                </span>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  Featured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200/10 bg-white shadow-2xl shadow-slate-900/5 dark:border-slate-700/40 dark:bg-slate-950 dark:text-slate-100">
        <div className="flex flex-col gap-4 border-b border-slate-200/70 px-6 py-5 dark:border-slate-700/40 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Category Table
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Literary Categories
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span>{`${filteredData.length} total categories`}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-500" />
            <span>{`Page ${currentPage} of ${Math.max(totalPages, 1)}`}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse text-sm">
            <thead className="bg-slate-950 text-slate-300">
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
                  Category Name
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  ID
                </th>
                <th className="px-5 py-4 text-left font-semibold uppercase tracking-[0.08em]">
                  Books Count
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
                currentItems.map((item, idx) => (
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
                    <td className="px-5 py-4">{item.quantity}</td>
                    <td className="px-5 py-4 font-semibold text-slate-900 dark:text-slate-100">
                      {item.sale}
                    </td>
                    <td className="px-5 py-4">{item.createdAt}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3 text-lg text-slate-600 dark:text-slate-300">
                        <Link href="/category/edit">
                          <FiEdit className="cursor-pointer hover:text-blue-500" />
                        </Link>
                        <RiDeleteBin5Line className="cursor-pointer hover:text-rose-500" />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="px-5 py-10 text-center text-sm text-slate-500 dark:text-slate-400"
                  >
                    No book categories match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 px-6 py-4 text-sm text-slate-500 dark:border-slate-700/40 dark:text-slate-400">
            <span>{`Showing ${currentItems.length} of ${filteredData.length} book categories`}</span>
            <div className="flex flex-wrap items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`rounded-2xl px-4 py-2 text-sm ${currentPage === i + 1 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"}`}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
