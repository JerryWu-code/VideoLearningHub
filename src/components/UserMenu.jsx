import React, { useState } from 'react';

function UserMenu({ fullname, email, profilePicture }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative flex items-center space-x-3">
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        onClick={toggleDropdown}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={profilePicture} alt="User profile" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3">
            <span className="block text-sm font-semibold text-gray-900 dark:text-white">{fullname}</span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{email}</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserMenu;




