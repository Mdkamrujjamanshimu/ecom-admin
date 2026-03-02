"use client";
import { Button, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import SearchBox from "@/Components/SearchBox";
import Link from "next/link";
import { MdAddCircle } from "react-icons/md";

// Custom styled switch component for publish status (material-ui)
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));
// End of custom switch component

const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-2 mt-3 mb-5">All products</h2>

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
              <option value="">In stock</option>
              <option value="">Out of stock</option>
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
            </select>
          </div>
          <div className="w-full">
            <Link href="/products/add">
              <Button
                className={`w-full capitalize! bg-green-500! hover:bg-green-600! text-white! rounded-md! px-4! py-2!`}
              >
                <MdAddCircle size={20} className="mr-1" />
                Add product
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
                  Product Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Product ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Quantity
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Sale
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Stock
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Start date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:bg-[#181818]">
              <tr className="text-gray-700 dark:text-gray-300">
                <td className="px-4 py-3 text-sm">1</td>
                <td className="px-4 py-3 text-sm font-medium ">
                  মার্কেটিং মাস্টারি (ডিজিটাল মার্কেটিংয়ের পূর্ণাঙ্গ গাইডলাইন)
                </td>
                <td className="px-4 py-3 text-sm">#PRO-001</td>
                <td className="px-4 py-3 text-sm">category 1</td>
                <td className="px-4 py-3 text-sm">200</td>
                <td className="px-4 py-3 text-sm">20</td>
                <td className="px-4 py-3 text-sm">6</td>
                <td className="px-4 py-3 text-sm">In Stock</td>
                <td className="px-4 py-3 text-sm">2024-01-01</td>
                <td className="px-4 py-3 text-[18px] ">
                  <div className="flex gap-2">
                    <Link href="/products/edit">
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
