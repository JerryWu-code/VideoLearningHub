import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const categories = [
    { title: 'Computer & Office', icon: <ComputerOfficeIcon /> },
    { title: 'Collectibles & Toys', icon: <CollectiblesToysIcon /> },
    { title: 'Books', icon: <BooksIcon /> },
    { title: 'Fashion/Clothes', icon: <FashionClothesIcon /> },
    { title: 'Sports & Outdoors', icon: <SportsOutdoorsIcon /> },
    { title: 'Painting & Hobby', icon: <PaintingHobbyIcon /> },
    { title: 'Electronics', icon: <ElectronicsIcon /> },
    { title: 'Food & Grocery', icon: <FoodGroceryIcon /> },
    { title: 'Music', icon: <MusicIcon /> },
    { title: 'TV/Projectors', icon: <TVProjectorsIcon /> },
    // Add more categories here
];

// Icon components (example for one, repeat for each as needed)
const ComputerOfficeIcon = () => (
    <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
    </svg>
);

export const TrendingFields = () => {
    const [input, setInput] = useState("");
    const [filteredCategories, setFilteredCategories] = useState(categories);

    const handleSearch = (value) => {
        setInput(value);
        const results = categories.filter((category) =>
            category.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCategories(results);
    };

    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Trending Fields</h2>
                </div>

                {/* Search Input */}
                <div className="input-wrapper mb-6 flex items-center border border-gray-300 rounded-lg p-2 dark:border-gray-700">
                    <FaSearch id="search-icon" className="text-gray-400" />
                    <input
                        className="flex-1 bg-transparent outline-none ml-2 text-gray-900 dark:text-white"
                        placeholder="Type to search..."
                        value={input}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>

                {/* Categories Grid */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredCategories.map((category, index) => (
                        <a key={index} href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            {category.icon}
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{category.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};


