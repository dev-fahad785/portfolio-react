/* eslint-disable react/prop-types */
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = ({
  title,
  description,
  features = [],
  tags = [],
  btn1Url,
  btn2Url,
  btnText,
  btn2Text,
  image,
}) => {
  return (
    <div className="group w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-black/10 dark:hover:border-white/20 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 dark:hover:shadow-black/50 relative overflow-hidden flex flex-col min-h-[24rem]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-700/50 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-grow h-full">
        {image ? (
          <div className="mb-3 flex-shrink-0">
            <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                src={image}
                alt={title}
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">{title}</h3>
          </div>
        ) : (
          <div className="mb-3 flex-shrink-0">
            <h3 className="font-bold text-2xl text-gray-900 dark:text-white line-clamp-1 transition-colors">{title}</h3>
            {description && (
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1 line-clamp-2">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.slice(0, 9).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium border border-gray-200 dark:border-gray-600"
              >
                {tag}
              </span>
            ))}
            {tags.length > 5 && <span className="text-xs text-gray-400 dark:text-gray-500 self-center">+{tags.length - 5}</span>}
          </div>
        )}

        {/* Features */}
        {features.length > 0 && (
          <div className="flex-grow space-y-1.5">
            {features.slice(0, 6).map((feature, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                <span className="leading-tight">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto pt-4 flex flex-wrap gap-3 z-10 flex-shrink-0">
          {btn1Url && (
            <a
              href={btn1Url}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-300 group/btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg group-hover/btn:scale-110 transition-transform" />
              {btnText || 'Code'}
            </a>
          )}
          {btn2Text && btn2Url && (
            <a
              href={btn2Url}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium border border-black dark:border-white rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-md shadow-gray-200 dark:shadow-black/30 hover:shadow-lg group/btn2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="text-sm group-hover/btn2:scale-110 transition-transform" />
              {btn2Text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
