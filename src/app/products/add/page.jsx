import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-2 mx-4">Add New Product</h1>
      <div className="py-4">
        <form
          action=""
          className="bg-white dark:bg-[#181818] p-5 m-4 rounded-md dark:text-gray-200 text-gray-800"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="product-id" className="text-[18px] font-medium">
                Product ID
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515]  text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Title
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Image
              </label>
              <input
                type="file"
                required
                name=""
                id=""
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Category
              </label>
              <select
                name=""
                id=""
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              >
                <option value="">Select Category</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="price" className="text-[18px] font-medium">
                Price
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Discount (%)
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Writer
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Publisher
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Subject
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Pages
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Edition
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-[18px] font-medium">
                Stock
              </label>
              <input
                type="text"
                required
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] text-[14px] rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div className="my-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="product-id" className="text-[18px] font-medium">
                Description
              </label>
              <textarea
                name=""
                id=""
                placeholder="Enter product description..."
                className="border outline-none border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515]  text-[14px] rounded-md px-3 py-2"
              ></textarea>
            </div>
          </div>
          <div className="">
            <FormGroup className="flex! flex-row! gap-2!">
              <FormControlLabel
                control={<Checkbox />}
                label="Best Category"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="New Product"
              />
            </FormGroup>
          </div>
          <Button className="bg-gray-800! hover:bg-gray-900! text-white! w-full! py-2! mt-4!">
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
