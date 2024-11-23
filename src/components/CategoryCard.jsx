import React from 'react';

const CategoryCard = ({ text, link, onClick }) => {
    return (
      <div
        className="w-auto flex items-centerjustify-center rounded-lg border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
        onClick={onClick} // Attach the onClick handler here
      >
        <a
          href={link}
          className="text-sm font-medium text-gray-900 dark:text-white"
          onClick={(e) => e.preventDefault()} // Prevent default anchor behavior
        >
          {text}
        </a>
      </div>
    );
  };

export default CategoryCard;
