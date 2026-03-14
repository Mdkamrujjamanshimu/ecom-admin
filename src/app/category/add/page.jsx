"use client";

import Button from "@mui/material/Button";
import React, { useState, useRef } from "react";

export default function AddCategoryPage() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCategoryImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      setCategoryImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const removeImage = () => {
    setCategoryImage(null);
    setPreviewImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
    removeImage();
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
              <label className="text-gray-700 dark:text-gray-300 font-semibold">
                Category Name
              </label>

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
              <label className="text-gray-700 dark:text-gray-300 font-semibold">
                Category Image <span className="text-gray-400">(optional)</span>
              </label>

              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current.click()}
                className="
                border-2 border-dashed
                border-gray-300
                dark:border-gray-600
                rounded-xl
                p-6
                flex
                items-center
                justify-center
                text-center
                cursor-pointer
                bg-gray-50
                dark:bg-gray-700
                hover:shadow-lg
                transition
                relative
                "
              >
                {previewImage ? (
                  <div className="relative">
                    <img
                      src={previewImage}
                      alt="preview"
                      className="w-40 h-40 object-cover rounded-xl"
                    />

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage();
                      }}
                      className="
                      absolute
                      -top-3
                      -right-3
                      bg-red-500
                      text-white
                      w-8
                      h-8
                      rounded-full
                      flex
                      items-center
                      justify-center
                      shadow
                      hover:bg-red-600
                      transition
                      "
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-400 dark:text-gray-300">
                    Click or Drag & Drop image here
                  </p>
                )}

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
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
