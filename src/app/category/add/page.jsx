"use client";

import Button from "@mui/material/Button";
import React, { useState, useRef } from "react";
import DragDropImg from "../../../Components/DragDropImg";

export default function AddCategoryPage() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryName) {
      setError("Category name is required");
      return;
    }

    setError("");

    console.log({
      categoryName,
      categoryImage, // image optional
    });

    alert("Category added successfully!");

    // reset form
    setCategoryName("");
    // removeImage();
    setCategoryImage(null);
  };

  return (
    <div className="min-h-screen flex justify-center py-14 px-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
            Add New Category
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Create and manage your product categories
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="
          bg-white dark:bg-gray-800
          rounded-3xl
          shadow-xl
          p-8 sm:p-10
          space-y-8
          transition
          hover:shadow-2xl
          "
        >
          <div className="grid grid-cols-2 gap-6 max-[650px]:grid-cols-1">
            {/* Category Name */}
            <div className="flex flex-col gap-3">
              <label className="text-[18px] font-medium">Category Name</label>

              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Enter category name"
                className="
                w-full
                px-5 py-3
                rounded-xl
                border
                border-gray-300
                dark:border-gray-700
                dark:bg-gray-700
                dark:text-white
                outline-none
                transition
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                shadow-sm
                hover:shadow-md
                "
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-3">
              <DragDropImg label="Category Image" />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-center font-medium">{error}</p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            className="
            w-full!
            py-4!
            text-lg!
            font-semibold!
            rounded-xl!
            bg-linear-to-r!
            from-blue-500!
            to-blue-600!
            hover:from-blue-600!
            hover:to-blue-700!
            shadow-lg!
            transition!
            transform!
            hover:scale-[1.02]!
            "
          >
            Add Category
          </Button>
        </form>
      </div>
    </div>
  );
}
