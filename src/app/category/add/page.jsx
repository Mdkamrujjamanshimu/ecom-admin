import Button from "@mui/material/Button";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-2 mx-4">Add New Category</h1>
      <div className="py-4">
        <form
          action=""
          className="bg-white dark:bg-[#181818] p-5 m-4 rounded-md dark:text-gray-200 text-gray-800"
        >
          <div className="grid grid-cols-2 max-[650px]:grid-cols-1 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Name
              </label>
              <input
                type="text"
                required
                name=""
                id=""
                placeholder="Category name"
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Image
              </label>
              <input
                type="file"
                name=""
                id=""
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
          </div>

          <Button className="bg-gray-800! hover:bg-gray-900! text-white! w-full! py-2! mt-4!">
            Add Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
