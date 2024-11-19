import React from 'react';

const CategoryCard = ({ icon, text, link }) => {
    return (
        <a
            href={link}
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <svg
                className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                {icon}
            </svg>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{text}</span>
        </a>
    );
};

export default CategoryCard;
