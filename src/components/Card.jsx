
import React from 'react';

const Card = ({ image, title, tags, btn1Url, btn2Url, btnText, btn2Text }) => {
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg border border-black border-opacity-60 transition-transform transform hover:scale-105">
            {/* Image Container with Aspect Ratio */}
            <div className="relative w-full pb-48"> {/* Aspect ratio container */}
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg p-2"
                    src={image}
                    alt={title}
                />
            </div>
            {/* Card Content */}
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 text-gray-900">{title}</div>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-300 hover:text-gray-900"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            {/* Buttons */}
            <div className="px-6 pt-4 pb-2 flex flex-wrap justify-center gap-4">
                <a
                    href={btn1Url}
                    className="py-2 px-6 border border-black rounded-lg text-black bg-white hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {btnText}
                </a>
                {btn2Text && (
                    <a
                        href={btn2Url}
                        className="py-2 px-6 border border-black rounded-lg text-black bg-white hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {btn2Text}
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;

