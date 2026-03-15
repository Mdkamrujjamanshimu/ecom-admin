"use client";

import DragDropImg from "@/Components/DragDropImg";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mx-4">
        Edit Product
      </h1>

      <div className="py-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white dark:bg-gray-800 p-5 m-4 rounded-md dark:text-gray-200 text-gray-800"
        >
          <div className="grid grid-cols-2 max-[650px]:grid-cols-1 gap-4">
            {/* IMAGE COMPONENT */}

            <div className="col-span-2 max-[650px]:col-span-1">
              <DragDropImg label="Product Image" />
            </div>

            {/* PRODUCT ID */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Product ID</label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* TITLE */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Title</label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* CATEGORY */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Category</label>
              <select
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              >
                <option value="">Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>

            {/* PRICE */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Price</label>
              <input
                type="number"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* DISCOUNT */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Discount (%)</label>
              <input
                type="number"
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* WRITER */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Writer</label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* PUBLISHER */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Publisher</label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* SUBJECT */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Subject</label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* PAGES */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Pages</label>
              <input
                type="number"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* EDITION */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Edition</label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>

            {/* STOCK */}

            <div className="flex flex-col gap-1">
              <label className="text-[18px] font-medium">Stock</label>
              <input
                type="number"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)]
                dark:border-[rgba(255,255,255,0.2)]
                focus:border-[rgba(0,0,0,0.4)]
                dark:focus:border-[rgba(255,255,255,0.4)]
                dark:bg-gray-700 text-[14px] rounded-md px-3 py-2"
              />
            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="my-3 flex flex-col gap-1">
            <label className="text-[18px] font-medium">Description</label>

            <textarea
              rows="4"
              placeholder="Enter product description..."
              className="border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] dark:bg-gray-700 outline-none text-[14px] rounded-md px-3 py-2"
            ></textarea>
          </div>

          {/* CHECKBOX */}

          <FormGroup className="flex! flex-row! gap-2!">
            <FormControlLabel
              control={<Checkbox sx={{ color: "white" }} />}
              label="Best Category"
            />
            <FormControlLabel
              control={<Checkbox sx={{ color: "white" }} />}
              label="New Product"
            />
          </FormGroup>

          {/* BUTTON */}

          <Button className="bg-gray-900! hover:bg-gray-950! text-white! w-full! py-2! mt-4!">
            Save Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
