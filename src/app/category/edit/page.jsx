"use client";
// @ts-nocheck

import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";
import { FiCheckCircle, FiEdit3, FiImage, FiRefreshCcw } from "react-icons/fi";

export default function EditCategoryPage() {
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(
    /** @type {File|null} */(null),
  );
  const [previewImage, setPreviewImage] = useState("");
  const [categoryTagline, setCategoryTagline] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fileRef = useRef(/** @type {HTMLInputElement|null} */(null));

  const handleImageChange = (
    /** @type {React.ChangeEvent<HTMLInputElement>} */ e,
  ) => {
    const files = e.target.files;
    if (!files) {
      return;
    }

    const file = files[0];
    if (file && file.type.startsWith("image/")) {
      setCategoryImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setError("");
    }
  };

  const handleDrop = (/** @type {React.DragEvent<HTMLDivElement>} */ e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setCategoryImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setError("");
    }
  };

  const handleDragOver = (/** @type {React.DragEvent<HTMLDivElement>} */ e) => {
    e.preventDefault();
  };

  const removeImage = () => {
    setCategoryImage(null);
    setPreviewImage("");
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const handleSubmit = (/** @type {React.FormEvent<HTMLFormElement>} */ e) => {
    e.preventDefault();
    if (!categoryId.trim()) {
      setError("Category ID is required");
      setSuccess("");
      return;
    }

    if (!categoryName.trim()) {
      setError("Category name is required");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Category updated successfully!");

    console.log({
      categoryId,
      categoryName,
      categoryTagline,
      categoryImage,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900 px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_30%)]"></div>
        <div className="relative max-w-6xl mx-auto text-white">
          <div className="flex max-[1210px]:flex-col gap-[1rem] items-center justify-between">
            <div className=" w-full">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-sm">
                <FiEdit3 className="w-4 h-4" /> CATEGORY EDITOR
              </p>
              <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">
                Customize your book category with luxury polish
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/85 leading-8">
                Upgrade your category editing experience with a refined
                interface, polished controls, and detailed settings that help
                your bookstore look professional.
              </p>
            </div>

            <div className="grid grid-cols-3 max-[500px]:grid-cols-2 max-[350px]:grid-cols-1 gap-4 text-center w-full">
              <div className="rounded-3xl border border-white/15 bg-white/10 px-4 py-5 shadow-xl backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  Saved
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">128</p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 px-4 py-5 shadow-xl backdrop-blur-sm">
                <div className="flex flex-col">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                    Categories
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">24</p>
                </div>

              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 px-4 py-5 shadow-xl backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  Impact
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">A+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 xl:grid-cols-[1.35fr_0.85fr]">
          <div className="space-y-8">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10 p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Category settings
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
                    Edit category details
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <FiRefreshCcw className="w-4 h-4" /> Auto draft ready
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 mt-10">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Category ID
                  </span>
                  <input
                    type="text"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    placeholder="e.g., CAT-2387"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Category Name
                  </span>
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="e.g., Modern Classics"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>

                <label className="block lg:col-span-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Category Tagline
                  </span>
                  <input
                    type="text"
                    value={categoryTagline}
                    onChange={(e) => setCategoryTagline(e.target.value)}
                    placeholder="A curated reading experience for every chapter"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>

                <div className="lg:col-span-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Cover Image (optional)
                  </span>
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileRef.current?.click()}
                    className="mt-3 rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-indigo-400 hover:bg-white dark:border-slate-700 dark:bg-slate-950 dark:hover:border-indigo-500 dark:hover:bg-slate-900 cursor-pointer"
                  >
                    {previewImage ? (
                      <div className="relative mx-auto inline-flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                        <img
                          src={previewImage}
                          alt="Category preview"
                          className="h-40 w-40 object-cover"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeImage();
                          }}
                          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm transition hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div className="mx-auto max-w-xs text-center">
                        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white shadow-lg">
                          <FiImage className="h-7 w-7" />
                        </div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          Drop your category artwork here
                        </p>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                          Supports JPG, PNG, or WEBP. Click to select a file.
                        </p>
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700 dark:border-red-700/30 dark:bg-red-950/50 dark:text-red-200">
                  {error}
                </div>
              )}

              {success && (
                <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-200">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="h-5 w-5" />
                    <span>{success}</span>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Update category information and keep your store polished.
                  </p>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-8 py-3 text-sm font-semibold capitalize shadow-lg shadow-indigo-500/20 hover:from-indigo-700 hover:to-fuchsia-700"
                >
                  Save changes
                </Button>
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200/60 bg-white/90 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900 dark:shadow-black/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                Pro tips
              </p>
              <ul className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  Keep the category name concise and memorable.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  Choose an image that reflects the genre mood.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  Update the tagline to align with your bookstore brand.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
