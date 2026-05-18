"use client";

// Book Ecommerce Admin Panel - Add Category Page
// Premium form interface for creating new book categories with advanced features.
// Includes image upload, SEO optimization, and real-time validation.

import Button from "@mui/material/Button";
import React, { useState } from "react";
import DragDropImg from "../../../Components/DragDropImg";
import {
  FiPlus,
  FiCheck,
  FiX,
  FiSettings,
  FiTag,
  FiImage,
  FiGlobe,
} from "react-icons/fi";

export default function AddCategoryPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    seoTitle: "",
    seoDescription: "",
    featured: false,
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Category name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Category name must be at least 2 characters";
    }

    if (formData.description.trim() && formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    if (formData.seoTitle && formData.seoTitle.length > 60) {
      newErrors.seoTitle = "SEO title should be under 60 characters";
    }

    if (formData.seoDescription && formData.seoDescription.length > 160) {
      newErrors.seoDescription =
        "SEO description should be under 160 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Category Data:", formData);
    alert("Book category created successfully!");

    // Reset form
    setFormData({
      name: "",
      description: "",
      seoTitle: "",
      seoDescription: "",
      featured: false,
      image: null,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
              <FiPlus className="w-4 h-4" />
              Create New Category
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Add Literary Category
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Create a new book category with premium features, SEO
              optimization, and advanced settings for your bookstore.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Basic Information */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl">
                  <FiTag className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    Basic Information
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Essential details for your book category
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Category Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="e.g., Mystery & Thriller, Romance, Science Fiction"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.name
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-indigo-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Describe this book category and its appeal to readers..."
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.description
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-indigo-500"
                    } focus:outline-none focus:ring-2 resize-none`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.description}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {formData.description.length}/500 characters
                  </p>
                </div>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-2xl">
                  <FiGlobe className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    SEO Optimization
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Improve discoverability in search engines
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* SEO Title */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    value={formData.seoTitle}
                    onChange={(e) =>
                      handleInputChange("seoTitle", e.target.value)
                    }
                    placeholder="Custom title for search engines"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.seoTitle
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-indigo-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.seoTitle && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.seoTitle}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {formData.seoTitle.length}/60 characters (recommended)
                  </p>
                </div>

                {/* SEO Description */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    SEO Description
                  </label>
                  <textarea
                    value={formData.seoDescription}
                    onChange={(e) =>
                      handleInputChange("seoDescription", e.target.value)
                    }
                    placeholder="Meta description for search results"
                    rows={3}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.seoDescription
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-indigo-500"
                    } focus:outline-none focus:ring-2 resize-none`}
                  />
                  {errors.seoDescription && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.seoDescription}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {formData.seoDescription.length}/160 characters
                    (recommended)
                  </p>
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <FiImage className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    Category Image
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Upload a high-quality image for your category
                  </p>
                </div>
              </div>

              <DragDropImg
                label=""
                onImageChange={(image) => handleInputChange("image", image)}
              />
            </div>
            {/* Submit Button */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-16 py-5 text-xl font-semibold rounded-2xl shadow-xl transition-all duration-300 transform ${
                    isSubmitting
                      ? "bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white hover:scale-[1.02] shadow-lg hover:shadow-2xl"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Creating Category...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <FiCheck className="w-6 h-6" />
                      <span>Create Book Category</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
