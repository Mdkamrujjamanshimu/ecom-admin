"use client";

import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

/* ================= ORDER JSON ================= */

const order = {
  id: "#ORD-001",
  customer: "John Doe",
  date: "2024-01-01",
  contact: "+1 234 567 890",
  address: "123 Main Street, Apt 4B, New York, NY 10001",
  subtotal: 2599.99,
  delivery: 100,
  total: 2699.99,
  status: "Paid",
  products: [
    {
      id: 1,
      name: "মার্কেটিং মাস্টারি (ডিজিটাল মার্কেটিংয়ের পূর্ণাঙ্গ গাইডলাইন)",
      price: 99.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "মার্কেটিং মাস্টারি (ডিজিটাল মার্কেটিংয়ের পূর্ণাঙ্গ গাইডলাইন)",
      price: 199.99,
      quantity: 1,
    },
  ],
};

const page = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-gray-800 dark:text-gray-200">
        Order {order.id}
      </h2>

      {/* ================= ORDER INFO ================= */}

      <div className="bg-white dark:bg-gray-800 backdrop-blur border border-gray-200 dark:border-gray-800 rounded-3xl shadow-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Order Details
        </h3>

        <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Customer Name
            </p>
            <p className="font-medium">{order.customer}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Order Date
            </p>
            <p className="font-medium">{order.date}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Contact</p>
            <p className="font-medium">{order.contact}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Shipping Address
            </p>
            <p className="font-medium">{order.address}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Subtotal</p>
            <p className="font-medium">
              <span className="font-bold text-xl">৳</span>
              {order.subtotal}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Delivery Charge
            </p>
            <p className="font-medium">
              <span className="font-bold text-xl">৳</span>
              {order.delivery}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Amount
            </p>
            <p className="font-medium">
              <span className="font-bold text-xl">৳</span>
              {order.total}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>

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
          </div>
        </div>

        <div className="mt-6">
          <Link href="/orders/tracking">
            <Button className="bg-orange-600! hover:bg-orange-700! text-white! w-full! py-2!">
              Track Order
            </Button>
          </Link>
        </div>
      </div>

      {/* ================= PRODUCT TABLE ================= */}

      <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 backdrop-blur shadow-lg">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Product List
          </h3>
        </div>

        <table className="min-w-[700px] w-full text-sm sm:text-base">
          <thead className="bg-linear-to-r from-gray-100 to-gray-50 dark:from-[#1a1a1a] dark:to-[#131313]">
            <tr className="text-gray-700 dark:text-gray-300">
              <th className="px-4 py-3 text-left font-semibold">
                Product Name
              </th>
              <th className="px-4 py-3 text-left font-semibold">Price</th>
              <th className="px-4 py-3 text-left font-semibold">Quantity</th>
              <th className="px-4 py-3 text-left font-semibold">Total</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {order.products.map((product) => (
              <tr
                key={product.id}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              >
                <td className="px-4 py-3">{product.name}</td>

                <td className="px-4 py-3">
                  <span className="font-bold text-xl">৳</span>
                  {product.price}
                </td>

                <td className="px-4 py-3">{product.quantity}</td>

                <td className="px-4 py-3">
                  <span className="font-bold text-xl">৳</span>
                  {(product.price * product.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
