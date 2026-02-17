import SearchBox from "@/Components/SearchBox";
import { Button } from "@mui/material";
import React from "react";
import { MdAddCircle } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Checkbox from "@mui/material/Checkbox";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-2">Category</h1>
      {/* ADD CATEGORY */}

      <div
        className={`flex justify-between items-center bg-white dark:bg-[#181818] p-3 my-4 rounded-md`}
      >
        <div className="">
          <SearchBox placeholder="New Category..." width="300px" />
        </div>
        <div className="">
          <Button
            className={`capitalize! bg-green-500! hover:bg-green-600! text-white! rounded-md! px-4! py-2!`}
          >
            <MdAddCircle size={20} className="mr-1" />
            Add Category
          </Button>
        </div>
      </div>

      {/* CATEGORY LIST TABLE */}

      <div className="">
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100 dark:bg-[#131313]">
            <tr className="text-gray-700 dark:text-gray-300">
              <th className="px-4 py-3 text-left text-sm font-semibold">Sl</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Category Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Crt. Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:bg-[#181818]">
            <tr className="text-gray-700 dark:text-gray-300">
              <td className="px-4 py-3 text-sm">1</td>
              <td className="px-4 py-3 text-sm font-medium ">Category 1</td>
              <td className="px-4 py-3 text-sm">2024-01-01</td>
              <td className="px-4 py-3 text-sm">
                <Checkbox />
              </td>
              <td className="px-4 py-3 text-[18px] flex gap-2">
                <FiEdit className="text-blue-500 cursor-pointer" />
                <RiDeleteBin5Line className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
