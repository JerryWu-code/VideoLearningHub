import React from "react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-600">
      {/* decrease padding: p-4 (from p-6), increase padding: p-2 (from p-1) */}
      <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
        {/* turn text-sm to text-xs */}
        © 2023{" "}
        <a
          href="http://127.0.0.1:5173/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          EduLink
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-2 text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {/* turn text-sm to text-xs and mt-3 to mt-2 */}
        <li>
          <a href="#" className="hover:underline me-2 md:me-4">
            {/* decrease margin: me-2 (prev me-4)，md:me-4 (prev md:me-6) */}
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-2 md:me-4">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-2 md:me-4">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};