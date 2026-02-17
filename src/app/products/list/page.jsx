"use client";
import { Button, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

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
      <h1 className="text-3xl font-bold py-2">Product List</h1>

      {/* PRODUCT LIST TABLE */}

      <div className="">
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100 dark:bg-[#131313]">
            <tr className="text-gray-700 dark:text-gray-300">
              <th className="px-4 py-3 text-left text-sm font-semibold">Sl</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Product Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Price
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Stock
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Published
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
              <td className="px-4 py-3 text-sm">category 1</td>
              <td className="px-4 py-3 text-sm">200</td>
              <td className="px-4 py-3 text-sm">9</td>
              <td className="px-4 py-3 text-sm">
                <FormGroup>
                  <FormControlLabel control={<IOSSwitch />} label="" />
                </FormGroup>
              </td>
              <td className="px-4 py-3 text-[18px] ">
                <div className="flex gap-2">
                  <FiEdit className="text-blue-500 cursor-pointer" />
                  <RiDeleteBin5Line className="text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
