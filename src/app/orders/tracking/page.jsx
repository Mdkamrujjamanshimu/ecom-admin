"use client";

import React from "react";

const page = () => {
  const steps = [
    { step: "Pending", date: "2023-12-10", active: true },
    { step: "Processing", date: "2023-12-12", active: true },
    { step: "Shipped", date: "2023-12-15", active: true },
    { step: "Delivered", date: "-", active: false },
  ];

  const progress =
    ((steps.filter((s) => s.active).length - 1) / (steps.length - 1)) * 100;

  return (
    <div>
      <h2 className="text-2xl font-bold py-2 mt-3 mb-5">Order Tracking</h2>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-5">
        {/* ORDER HEADER */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Order ID: <span className="text-blue-500">#ORD-001</span>
          </h3>

          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full w-fit">
            Shipped
          </span>
        </div>

        {/* CUSTOMER INFO */}

        <div className="mb-6">
          <h4 className="text-md font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Customer Information
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-medium">Name:</span> John Doe
            </p>

            <p>
              <span className="font-medium">Email:</span> john@example.com
            </p>

            <p>
              <span className="font-medium">Phone:</span> +880123456789
            </p>
          </div>
        </div>

        {/* SHIPPING ADDRESS */}

        <div className="mb-8">
          <h4 className="text-md font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Shipping Address
          </h4>

          <p className="text-sm text-gray-700 dark:text-gray-300">
            123 Main Street, Apt 4B, New York, NY 10001
          </p>
        </div>

        {/* DESKTOP PROGRESS */}

        <div className="hidden sm:block relative mb-8">
          {/* LINE */}
          <div className="absolute top-4 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600"></div>

          {/* ACTIVE LINE */}
          <div
            className="absolute top-4 left-0 h-1 bg-green-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>

          <div className="flex justify-between relative">
            {steps.map((item, index) => (
              <div key={index} className="text-center flex-1">
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm ${
                    item.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>

                <p className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                  {item.step}
                </p>

                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE TIMELINE */}

        <div className="sm:hidden relative">
          <div className="absolute left-[13px] top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-8">
            {steps.map((item, index) => (
              <div key={index} className="flex items-start gap-4 relative">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs z-10 ${
                    item.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {item.step}
                  </p>

                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
