import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageSrc, title, description, link }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={link || '#'}>
                <img className="rounded-t-lg" src={imageSrc} alt={title} />
            </Link>
            <div className="p-3"> {/* Reduced padding from 5 to 3 */}
                <Link to={link || '#'}>
                    <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5> {/* Adjusted mb-2 to mb-1, and text size */}
                </Link>
            </div>
        </div>
    );
};

export default Card;
