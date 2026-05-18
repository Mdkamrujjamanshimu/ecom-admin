"use client";

import React, { useRef, useState, useEffect } from "react";
import { FiUploadCloud, FiX, FiImage, FiCheck } from "react-icons/fi";

const DragDropImg = ({ label, onImageChange }) => {
  const [image, setImage] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (onImageChange) {
      onImageChange(image);
    }
  }, [image, onImageChange]);

  const handleImage = (file) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    const newImage = {
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
    };

    setImage(newImage);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setImage(null);
    setUploadProgress(0);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-4">
      {/* DROP AREA */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !image && inputRef.current.click()}
        className={`relative border-2 border-dashed rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
          isDragOver
            ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 scale-[1.02]"
            : image
              ? "border-green-300 bg-green-50 dark:bg-green-950/50"
              : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500"
        }`}
      >
        {!image && (
          <div className="text-center">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors ${
                isDragOver
                  ? "bg-indigo-100 dark:bg-indigo-900/50"
                  : "bg-slate-100 dark:bg-slate-700"
              }`}
            >
              <FiUploadCloud
                className={`text-2xl transition-colors ${
                  isDragOver
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              />
            </div>
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
              {isDragOver ? "Drop your image here" : "Upload Category Image"}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Drag & drop or click to browse files
            </p>
            <div className="text-xs text-slate-400 dark:text-slate-500">
              PNG, JPG, GIF up to 5MB
            </div>
          </div>
        )}

        {/* UPLOAD PROGRESS */}
        {image && uploadProgress < 100 && (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-blue-100 dark:bg-blue-900/50">
              <FiImage className="text-2xl text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
              Uploading...
            </p>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {uploadProgress}% complete
            </p>
          </div>
        )}

        {/* IMAGE PREVIEW */}
        {image && uploadProgress === 100 && (
          <div className="relative group">
            <div className="relative border border-slate-200 dark:border-slate-600 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-700">
              <img
                src={image.preview}
                alt="Category preview"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200"></div>

              {/* Success overlay */}
              <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <FiCheck className="w-3 h-3" />
                Uploaded
              </div>

              {/* Remove button */}
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110"
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Image info */}
            <div className="mt-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300 truncate">
                  {image.name}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {formatFileSize(image.size)}
                </span>
              </div>
            </div>
          </div>
        )}

        <input
          type="file"
          ref={inputRef}
          onChange={(e) => handleImage(e.target.files[0])}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default DragDropImg;
