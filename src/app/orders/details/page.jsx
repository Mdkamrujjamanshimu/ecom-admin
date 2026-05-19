"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@mui/material";
import SearchBox from "@/Components/SearchBox";
import Link from "next/link";

const initialOrder = {
  id: "#ORD-001",
  customer: "John Doe",
  date: "2024-01-01",
  contact: "+1 234 567 890",
  address: "123 Main Street, Apt 4B, New York, NY 10001",
  subtotal: 2599.99,
  delivery: 100,
  total: 2699.99,
  status: "Paid",
  paymentStatus: "Paid",
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

const statusOptions = ["Paid", "Processing", "Cancelled"];
const paymentOptions = ["Paid", "Pending", "Refunded"];

const page = () => {
  const [order, setOrder] = useState(initialOrder);
  const [note, setNote] = useState("");

  const subtotal = useMemo(() => order.products.reduce((sum, item) => sum + item.price * item.quantity, 0), [order.products]);

  const statusClasses = /** @type {{[key:string]: string}} */ ({
    Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",
    Processing: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200",
    Cancelled: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-200",
  });

  const paymentClasses = /** @type {{[key:string]: string}} */ ({
    Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200",
    Refunded: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-200",
  });

  return (
    <div className="p-2 sm:p-4 lg:p-4 space-y-6">
      {/* header section */}
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:shadow-slate-950/40 overflow-hidden">
        <div className="flex flex-col gap-[.5rem] xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-2xl w-full">
            <p className="text-xs uppercase tracking-[0.32em] text-amber-500/90 dark:text-amber-300/90">Order intelligence</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-slate-950 dark:text-white">{order.id} · {order.customer}</h1>
            <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Enterprise-grade order details, payment analytics and fulfillment status combined into one polished admin console.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200">{order.status}</span>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/20 dark:text-amber-200">{order.paymentStatus}</span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">{order.products.length} products</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 w-full">
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-200/40 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-950/40">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Order value</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">৳ {order.total.toFixed(2)}</p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-200/40 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-950/40">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Delivery fee</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">৳ {order.delivery.toFixed(2)}</p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-200/40 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-950/40">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Order date</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{order.date}</p>
            </div>
          </div>
        </div>
      </div>


      {/* order details section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 sm:p-8 shadow-xl dark:border-slate-700 dark:bg-slate-950">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Customer</p>
                <p className="text-lg font-semibold text-slate-950 dark:text-white">{order.customer}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Order ID</p>
                <p className="text-lg font-semibold text-slate-950 dark:text-white">{order.id}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Contact</p>
                <p className="text-lg font-semibold text-slate-950 dark:text-white">{order.contact}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Shipping address</p>
                <p className="text-lg font-semibold text-slate-950 dark:text-white">{order.address}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Status</p>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500 dark:text-slate-400">Order state</label>
                    <select
                      value={order.status}
                      onChange={(/** @type {React.ChangeEvent<HTMLSelectElement>} */ e) => setOrder((prev) => ({ ...prev, status: e.target.value }))}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                    >
                      {statusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${statusClasses[order.status]}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Payment</p>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500 dark:text-slate-400">Payment method</label>
                    <select
                      value={order.paymentStatus}
                      onChange={(/** @type {React.ChangeEvent<HTMLSelectElement>} */ e) => setOrder((prev) => ({ ...prev, paymentStatus: e.target.value }))}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                    >
                      {paymentOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${paymentClasses[order.paymentStatus]}`}>
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Internal note</h3>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note or instructions for fulfillment..."
                className="mt-3 w-full min-h-[160px] rounded-[28px] border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-950">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Order summary</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Financial breakdown</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <span>Invoice</span>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-xs text-white">#{order.id.slice(1)}</span>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Subtotal</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">৳ {subtotal.toFixed(2)}</p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Delivery</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">৳ {order.delivery.toFixed(2)}</p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Grand total</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">৳ {order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-950">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Shipment tracker</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Delivery progress</h2>
              </div>
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200">Scheduled</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { step: "Order received", done: true },
                { step: "Payment confirmed", done: order.paymentStatus === "Paid" },
                { step: "Packed and shipped", done: order.status === "Processing" || order.status === "Paid" },
                { step: "Delivered", done: order.status === "Paid" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`mt-1 h-3 w-3 rounded-full ${item.done ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.step}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.done ? "Completed" : "Pending"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-950">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Products</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Purchased items</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200">{order.products.length} items</span>
            </div>
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 text-sm text-left text-slate-700 dark:text-slate-300">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
                  <tr>
                    {['Product', 'Price', 'Qty', 'Total'].map((label) => (
                      <th key={label} className="px-4 py-3 font-semibold uppercase tracking-[0.08em]">{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {order.products.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                      <td className="px-4 py-4">{product.name}</td>
                      <td className="px-4 py-4">৳ {product.price.toFixed(2)}</td>
                      <td className="px-4 py-4">{product.quantity}</td>
                      <td className="px-4 py-4">৳ {(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
