"use client";

import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";

export default function EditCategoryPage() {
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");

  const fileRef = useRef(null);

  // image select
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategoryImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // drag drop
  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      setCategoryImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // remove image
  const removeImage = () => {
    setCategoryImage(null);
    setPreviewImage(null);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryId) {
      setError("Category ID is required");
      return;
    }

    if (!categoryName) {
      setError("Category name is required");
      return;
    }

    setError("");

    console.log({
      categoryId,
      categoryName,
      categoryImage,
    });

    alert("Category updated successfully!");

    // reset
    setCategoryId("");
    setCategoryName("");
    setCategoryImage(null);
    setPreviewImage(null);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
          Edit Category
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Update your category information
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 max-[650px]:grid-cols-1 gap-6">
            {/* Category ID */}
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium">Category ID</label>

              <input
                type="text"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                placeholder="Category ID"
                className="border border-gray-300 dark:border-gray-700 dark:bg-gray-700
                dark:text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Category Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium">Category Name</label>

              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Category name"
                className="border border-gray-300 dark:border-gray-700 dark:bg-gray-700
                dark:text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-2 col-span-2 max-[650px]:col-span-1">
              <label className="text-[16px] font-medium">
                Category Image (optional)
              </label>

              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileRef.current.click()}
                className="border border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col items-center justify-center text-center relative cursor-pointer dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              >
                {previewImage ? (
                  <div className="relative">
                    <img
                      src={previewImage}
                      alt="preview"
                      className="w-32 h-32 object-cover rounded-lg"
                    />

                    {/* remove button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage();
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">
                    Click or Drag & Drop image
                  </p>
                )}

                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          {/* Button */}
          <Button
            type="submit"
            variant="contained"
            className="w-full! mt-6! py-3! bg-linear-to-r! from-blue-500! to-blue-600! hover:from-blue-600! hover:to-blue-700! rounded-xl!"
          >
            Update Category
          </Button>
        </form>
      </div>
    </div>
  );
}
