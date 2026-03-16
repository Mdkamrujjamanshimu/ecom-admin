"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import SearchBox from "@/Components/SearchBox";
import Link from "next/link";

/* ================= JSON DATA ================= */

const orderData = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    price: 2000,
    quantity: 3,
    status: "Paid",
    createdAt: "2024-01-01",
  },
  {
    id: "#ORD-002",
    customer: "Sarah Khan",
    price: 1500,
    quantity: 2,
    status: "Unpaid",
    createdAt: "2024-01-05",
  },
  {
    id: "#ORD-003",
    customer: "Michael Lee",
    price: 3500,
    quantity: 5,
    status: "Paid",
    createdAt: "2024-01-08",
  },
  {
    id: "#ORD-004",
    customer: "David Smith",
    price: 1000,
    quantity: 1,
    status: "Unpaid",
    createdAt: "2024-01-10",
  },
];

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  /* ================= FILTER ================= */

  const filteredData = orderData.filter((order) => {
    const matchSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchStatus = statusFilter === "All" || order.status === statusFilter;

    return matchSearch && matchStatus;
  });

  /* ================= PAGINATION ================= */

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Order List
      </h2>

      {/* ================= FILTER AREA ================= */}

      <div className="grid grid-cols-3 max-[700px]:grid-cols-2 max-[450px]:grid-cols-1 gap-3 mb-6">
        <SearchBox
          placeholder="Search order..."
          width="100%"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-[#151515] text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>

        <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-[#151515] text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-400">
          <option>Sort by (Default)</option>
          <option>ID</option>
          <option>Customer</option>
          <option>Price</option>
        </select>
      </div>

      {/* ================= TABLE ================= */}

      <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 backdrop-blur shadow-lg">
        <table className="min-w-[900px] w-full text-sm sm:text-base">
          <thead className="bg-linear-to-r from-gray-100 to-gray-50 dark:from-[#1a1a1a] dark:to-[#131313]">
            <tr className="text-gray-700 dark:text-gray-300">
              {[
                "Sl",
                "Customer Name",
                "Order ID",
                "Price",
                "Quantity",
                "Status",
                "Created Date",
                "Action",
              ].map((th, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left font-semibold whitespace-nowrap"
                >
                  {th}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentItems.length > 0 ? (
              currentItems.map((order, idx) => (
                <tr
                  key={order.id}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  <td className="px-4 py-3">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </td>

                  <td className="px-4 py-3 font-medium">{order.customer}</td>

                  <td className="px-4 py-3">{order.id}</td>

                  <td className="px-4 py-3">{order.price}</td>

                  <td className="px-4 py-3">{order.quantity}</td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium
                      ${
                        order.status === "Paid"
                          ? "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
                          : "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-4 py-3">{order.createdAt}</td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Link href="/orders/details">
                        <FiEdit className="text-blue-500 hover:text-blue-600 cursor-pointer transition-colors" />
                      </Link>

                      <RiDeleteBin5Line className="text-red-500 hover:text-red-600 cursor-pointer transition-colors" />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= PAGINATION ================= */}

      {totalPages > 1 && (
        <div className="flex justify-end mt-4 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === i + 1
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
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

export default page;
