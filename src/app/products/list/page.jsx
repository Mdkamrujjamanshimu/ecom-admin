"use client";

import SearchBox from "@/Components/SearchBox";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";

/* ===============================
        JSON DATA
================================*/

const productData = [
  {
    id: "#PRO-001",
    name: "Marketing Mastery",
    category: "Category 1",
    price: 200,
    quantity: 20,
    sale: 6,
    stock: "In Stock",
    createdAt: "2024-01-01",
  },
  {
    id: "#PRO-002",
    name: "Web Design Guide",
    category: "Category 2",
    price: 150,
    quantity: 15,
    sale: 4,
    stock: "In Stock",
    createdAt: "2024-01-05",
  },
  {
    id: "#PRO-003",
    name: "JavaScript Basics",
    category: "Category 1",
    price: 180,
    quantity: 10,
    sale: 3,
    stock: "Out of Stock",
    createdAt: "2024-01-10",
  },
];

/* ===============================
          COMPONENT
================================*/

export default function ProductListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredData = productData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* PAGE TITLE */}

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        All Products
      </h2>

      {/* FILTERS */}

      <div className="grid grid-cols-5 max-[1220px]:grid-cols-4 max-[1030px]:grid-cols-3 max-[570px]:grid-cols-2 max-[410px]:grid-cols-1 gap-3 mb-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <SearchBox
            placeholder="Search product..."
            width="100%"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-[#151515] text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-400">
          <option>All Category</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>

        <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-[#151515] text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-400">
          <option>All Stock</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>

        <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-[#151515] text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-400">
          <option>Sort by (Default)</option>
          <option>ID</option>
          <option>Name</option>
          <option>Price</option>
        </select>

        <Link href="/products/add" className="w-full">
          <Button className="w-full! flex! items-center! justify-center! gap-2! bg-green-500! hover:bg-green-600! text-white! rounded-md! py-2! transition-all!">
            <MdAddCircle size={20} />
            Add Product
          </Button>
        </Link>
      </div>

      {/* TABLE */}

      <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-lg">
        <table className="min-w-[900px] w-full text-sm sm:text-base">
          <thead className="bg-linear-to-r from-gray-100 to-gray-50 dark:from-[#1a1a1a] dark:to-[#131313]">
            <tr className="text-gray-700 dark:text-gray-300">
              {[
                "Sl",
                "Product",
                "Product ID",
                "Category",
                "Price",
                "Quantity",
                "Sale",
                "Stock",
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
              currentItems.map((item, idx) => (
                <tr
                  key={item.id}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <td className="px-4 py-3">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </td>

                  <td className="px-4 py-3 font-medium">{item.name}</td>

                  <td className="px-4 py-3">{item.id}</td>

                  <td className="px-4 py-3">{item.category}</td>

                  <td className="px-4 py-3">
                    <span className="font-bold text-xl">৳</span>
                    {item.price}
                  </td>

                  <td className="px-4 py-3">{item.quantity}</td>

                  <td className="px-4 py-3">{item.sale}</td>

                  <td className="px-4 py-3">{item.stock}</td>

                  <td className="px-4 py-3">{item.createdAt}</td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Link href="/products/edit">
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
                  colSpan={11}
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}

      {totalPages > 1 && (
        <div className="flex justify-end mt-4 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg whitespace-nowrap ${
                currentPage === i + 1
                  ? "bg-linear-to-r from-blue-500 to-blue-600 text-white"
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
}
