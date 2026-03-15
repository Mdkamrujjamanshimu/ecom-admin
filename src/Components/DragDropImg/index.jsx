"use client";

import React, { useRef, useState } from "react";
import { FiUploadCloud, FiX } from "react-icons/fi";

const DragDropImg = ({ label }) => {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const handleImage = (file) => {
    if (!file) return;

    const newImage = {
      file,
      preview: URL.createObjectURL(file),
    };

    setImage(newImage);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setImage(null);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[18px] font-medium">{label}</label>

      {/* DROP AREA */}

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
        className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 cursor-pointer bg-white dark:bg-gray-700 hover:border-gray-400 transition"
      >
        {!image && (
          <div className="text-center">
            <FiUploadCloud className="text-3xl mx-auto mb-2 text-gray-500" />

            <p className="text-sm text-gray-500 dark:text-gray-300">
              Drag & Drop image here or click to upload
            </p>
          </div>
        )}

        {/* PREVIEW */}

        {image && (
          <div className="relative border border-gray-200 dark:border-gray-600 rounded-md overflow-hidden group w-48">
            <img
              src={image.preview}
              alt="preview"
              className="w-full h-28 object-cover"
            />

            <button
              type="button"
              onClick={removeImage}
              className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <FiX size={14} />
            </button>
          </div>
        )}

        <input
          type="file"
          ref={inputRef}
          onChange={(e) => handleImage(e.target.files[0])}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default DragDropImg;
