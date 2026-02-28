import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-2 mt-3 mb-5">Order #ORD-001</h2>
      <div className="w-full">
        <div className="bg-gray-100 dark:bg-[#181818] p-4 rounded-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Order Details</h3>
          <div className="grid grid-cols-2 gap-4 max-[401px]:gap-2">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Customer Name
              </p>
              <p className="font-medium">John Doe</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Order Date
              </p>
              <p className="font-medium">2023-12-15</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contact
              </p>
              <p className="font-medium">+1 234 567 890</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Shipping Address
              </p>
              <p className="font-medium">
                123 Main Street, Apt 4B, New York, NY 10001
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Subtotal
              </p>
              <p className="font-medium">2,599.99</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Delivery charge
              </p>
              <p className="font-medium">100</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Amount
              </p>
              <p className="font-medium">2,699.99</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
              <p className="font-medium text-green-500">Paid</p>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/orders/tracking">
              <Button className="bg-orange-800! hover:bg-orange-900! text-white! w-full! py-2! mt-4!">
                Track Order
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-[#181818] p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Product List</h3>
          <div className="w-full overflow-x-auto">
            <table className="min-w-[500px] w-full">
              <thead className="bg-gray-200 dark:bg-[#282828]">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Product Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Price
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Quantity
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {/* Example product row */}
                <tr className="border-b border-gray-300 dark:border-[#282828]">
                  <td className="px-4 py-3 text-sm">
                    মার্কেটিং মাস্টারি (ডিজিটাল মার্কেটিংয়ের পূর্ণাঙ্গ গাইডলাইন)
                  </td>
                  <td className="px-4 py-3 text-sm">$99.99</td>
                  <td className="px-4 py-3 text-sm">2</td>
                  <td className="px-4 py-3 text-sm">199.98</td>
                </tr>

                {/* Example product row */}
                <tr className="">
                  <td className="px-4 py-3 text-sm">
                    মার্কেটিং মাস্টারি (ডিজিটাল মার্কেটিংয়ের পূর্ণাঙ্গ গাইডলাইন)
                  </td>
                  <td className="px-4 py-3 text-sm">199.99</td>
                  <td className="px-4 py-3 text-sm">1</td>
                  <td className="px-4 py-3 text-sm">199.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
