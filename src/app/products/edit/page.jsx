"use client";

// Book Ecommerce Admin Panel - Edit Product Page
// Premium form interface for updating existing products with advanced inventory management.
// Includes image upload, pricing controls, and real-time validation.

import DragDropImg from "@/Components/DragDropImg";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { useState } from "react";
import {
  FiEdit,
  FiCheck,
  FiX,
  FiBook,
  FiTag,
  FiDollarSign,
  FiUsers,
  FiImage,
  FiStar,
  FiHash,
} from "react-icons/fi";

export default function EditProductPage() {
  const [formData, setFormData] = useState({
    productId: "#PRO-001",
    title: "",
    category: "",
    price: "",
    discount: "",
    writer: "",
    publisher: "",
    subject: "",
    pages: "",
    edition: "",
    stock: "",
    description: "",
    featured: false,
    newProduct: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Product title is required";
    } else if (formData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Valid price is required";
    }

    if (formData.discount && formData.discount > 100) {
      newErrors.discount = "Discount cannot exceed 100%";
    }

    if (!formData.writer.trim()) {
      newErrors.writer = "Writer/Author is required";
    }

    if (!formData.publisher.trim()) {
      newErrors.publisher = "Publisher is required";
    }

    if (!formData.pages || formData.pages < 1) {
      newErrors.pages = "Valid page number is required";
    }

    if (!formData.edition.trim()) {
      newErrors.edition = "Edition is required";
    }

    if (!formData.stock || formData.stock < 0) {
      newErrors.stock = "Valid stock quantity is required";
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
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Updated Product Data:", formData);
    setSuccessMessage("Product updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    setIsSubmitting(false);
  };

  const discountedPrice =
    formData.price && formData.discount
      ? (formData.price * (1 - formData.discount / 100)).toFixed(2)
      : formData.price;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
              <FiEdit className="w-4 h-4" />
              Edit Product
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Update Product Details
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Modify product information, pricing, inventory levels, and book specifications.
              All changes will be saved to the system.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-2xl flex items-center gap-3">
            <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
            <p className="text-green-700 dark:text-green-300 font-medium">
              {successMessage}
            </p>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Product Image */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-2xl">
                  <FiImage className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    Product Image
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Update product image or keep existing
                  </p>
                </div>
              </div>
              <DragDropImg label="Product Image" />
            </div>

            {/* Product ID & Basic Information */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl">
                  <FiBook className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    Basic Information
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Essential product details
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Product ID */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Product ID
                  </label>
                  <input
                    type="text"
                    value={formData.productId}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[14px] cursor-not-allowed"
                  />
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    <FiHash className="w-3 h-3 inline mr-1" />
                    Auto-generated, cannot be changed
                  </p>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Product Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="e.g., The Great Gatsby, Modern Physics..."
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.title
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-indigo-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.title}
                    </p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${
                      errors.category
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-indigo-500"
                    } focus:outline-none focus:ring-2`}
                  >
                    <option value="">Select Category</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="biography">Biography</option>
                    <option value="mystery">Mystery & Thriller</option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.category}
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
                    placeholder="Provide a detailed description of the product..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-2 resize-none"
                  />
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {formData.description.length}/1000 characters
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing & Inventory */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-2xl">
                  <FiDollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    Pricing & Inventory
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Manage prices and stock levels
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="0.00"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.price
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-green-500 focus:ring-green-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.price}
                    </p>
                  )}
                </div>

                {/* Discount */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.discount}
                    onChange={(e) =>
                      handleInputChange("discount", e.target.value)
                    }
                    placeholder="0"
                    max="100"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.discount
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-green-500 focus:ring-green-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.discount && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.discount}
                    </p>
                  )}
                </div>

                {/* Discounted Price Display */}
                {formData.discount && (
                  <div className="md:col-span-2 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Final Price After Discount
                    </p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ${discountedPrice}
                    </p>
                  </div>
                )}

                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Stock Quantity *
                  </label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => handleInputChange("stock", e.target.value)}
                    placeholder="0"
                    min="0"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.stock
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-green-500 focus:ring-green-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.stock && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.stock}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <FiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    Book Details
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Specific information about the book
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Writer */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Writer / Author *
                  </label>
                  <input
                    type="text"
                    value={formData.writer}
                    onChange={(e) => handleInputChange("writer", e.target.value)}
                    placeholder="e.g., J.K. Rowling"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.writer
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-purple-500 focus:ring-purple-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.writer && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.writer}
                    </p>
                  )}
                </div>

                {/* Publisher */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Publisher *
                  </label>
                  <input
                    type="text"
                    value={formData.publisher}
                    onChange={(e) =>
                      handleInputChange("publisher", e.target.value)
                    }
                    placeholder="e.g., Penguin Books"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.publisher
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-purple-500 focus:ring-purple-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.publisher && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.publisher}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject / Genre
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    placeholder="e.g., Fiction, Science, History"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:ring-2"
                  />
                </div>

                {/* Pages */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Number of Pages *
                  </label>
                  <input
                    type="number"
                    value={formData.pages}
                    onChange={(e) => handleInputChange("pages", e.target.value)}
                    placeholder="0"
                    min="1"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.pages
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-purple-500 focus:ring-purple-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.pages && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.pages}
                    </p>
                  )}
                </div>

                {/* Edition */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Edition *
                  </label>
                  <input
                    type="text"
                    value={formData.edition}
                    onChange={(e) =>
                      handleInputChange("edition", e.target.value)
                    }
                    placeholder="e.g., 1st Edition, Hardcover"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
                      errors.edition
                        ? "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-purple-500 focus:ring-purple-500"
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.edition && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.edition}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Product Settings */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-2xl">
                  <FiTag className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    Product Settings
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Featured and promotional options
                  </p>
                </div>
              </div>

              <FormGroup className="space-y-4">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.featured}
                      onChange={(e) =>
                        handleInputChange("featured", e.target.checked)
                      }
                      sx={{
                        color: "#4f46e5",
                        "&.Mui-checked": {
                          color: "#4f46e5",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      <div className="flex items-center gap-2">
                        <FiStar className="w-4 h-4" />
                        Mark as Best Category / Featured Product
                      </div>
                    </span>
                  }
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.newProduct}
                      onChange={(e) =>
                        handleInputChange("newProduct", e.target.checked)
                      }
                      sx={{
                        color: "#4f46e5",
                        "&.Mui-checked": {
                          color: "#4f46e5",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      <div className="flex items-center gap-2">
                        <FiEdit className="w-4 h-4" />
                        Mark as New Product
                      </div>
                    </span>
                  }
                />
              </FormGroup>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                sx={{
                  flex: 1,
                  background: "linear-gradient(to right, #7c3aed, #a855f7)",
                  "&:hover": {
                    background: "linear-gradient(to right, #6d28d9, #9333ea)",
                  },
                  "&:disabled": {
                    opacity: 0.5,
                    background: "linear-gradient(to right, #7c3aed, #a855f7)",
                  },
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "18px",
                  transition: "all 200ms ease-in-out",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  "&:hover:not(:disabled)": {
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
                  },
                  textTransform: "none",
                }}
              >
                {isSubmitting ? "Updating Product..." : "Save Changes"}
              </Button>
              <Button
                type="reset"
                sx={{
                  padding: "12px 32px",
                  backgroundColor: "#e2e8f0",
                  color: "#1e293b",
                  borderRadius: "12px",
                  fontWeight: 600,
                  transition: "all 200ms ease-in-out",
                  "&:hover": {
                    backgroundColor: "#cbd5e1",
                  },
                  "@media (prefers-color-scheme: dark)": {
                    backgroundColor: "#1e293b",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#334155",
                    },
                  },
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
