"use client";
import { Button } from "@mui/material";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import SearchBox from "@/Components/SearchBox";
import Link from "next/link";
import { MdAddCircle } from "react-icons/md";


const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-2 mt-3 mb-5">Order List</h2>

      {/* PRODUCT LIST TABLE */}

      <div className="rounded-md border border-gray-200 dark:border-[#282828]">
        <div
          className={`grid grid-cols-5 max-[1030px]:grid-cols-4 max-[989px]:grid-cols-5 max-[815px]:grid-cols-4 max-[660px]:grid-cols-3 max-[510px]:grid-cols-2 max-[425px]:grid-cols-1 gap-2 p-3 my-4 rounded-md`}
        >
          <div className="w-full max-[1030px]:col-span-2 max-[989px]:col-span-1 max-[815px]:col-span-2 max-[425px]:col-span-1">
            <SearchBox placeholder="Search here..." width="300px" />
          </div>
          <div className="w-full">
            <select
              name=""
              id=""
              className="w-full border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
            >
              <option value="">All Category</option>
              <option value="">Category 1</option>
              <option value="">Category 2</option>
            </select>
          </div>
          <div className="w-full">
            <select
              name=""
              id=""
              className="w-full border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
            >
              <option value="">All Status</option>
              <option value="">Paid</option>
              <option value="">Unpaid</option>
            </select>
          </div>
          <div className="w-full">
            <select
              name=""
              id=""
              className="w-full border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
            >
              <option value="">Sort by (Default)</option>
              <option value="">ID</option>
              <option value="">Name</option>
              <option value="">Price</option>
              <option value="">Payment</option>
            </select>
          </div>
          <div className="w-full">
            <Link href="/orders/details">
              <Button
                className={`w-full capitalize! bg-green-500! hover:bg-green-600! text-white! rounded-md! px-4! py-2!`}
              >
                <MdAddCircle size={20} className="mr-1" />
                Export all order
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[1100px] w-full">
            <thead className="bg-gray-100 dark:bg-[#131313]">
              <tr className="text-gray-700 dark:text-gray-300">
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Sl
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Customer Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  order ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Quantity
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:bg-[#181818]">
              <tr className="text-gray-700 dark:text-gray-300">
                <td className="px-4 py-3 text-sm">1</td>
                <td className="px-4 py-3 text-sm font-medium ">John Doe</td>
                <td className="px-4 py-3 text-sm">#ORD-001</td>
                <td className="px-4 py-3 text-sm">2000</td>
                <td className="px-4 py-3 text-sm">3</td>
                <td className="px-4 py-3 text-sm">Paid</td>
                <td className="px-4 py-3 text-[18px] ">
                  <div className="flex gap-2">
                    <Link href="/orders/details">
                      <FiEdit className="text-blue-500 cursor-pointer" />
                    </Link>
                    <RiDeleteBin5Line className="text-red-500 cursor-pointer" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
