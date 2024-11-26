import React, { useState } from "react";

export const ResourceFilter = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("All categories"); // Track the active button

  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Update the active category
    setCategory(category); // Notify the parent about the category change
  };

  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      {["All categories", "YouTube", "Bilibili", "ArXiv", "GitHub"].map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => handleCategoryChange(category)}
          className={`${
            activeCategory === category
              ? "text-white bg-blue-700 border-blue-700" // Active state
              : "text-gray-900 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700" // Default state with hover effect
          } focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-blue-100 dark:hover:text-blue-700 dark:text-gray-300`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
