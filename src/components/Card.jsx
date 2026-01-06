
import { useState } from 'react';
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
  image, // optional image for certificate cards
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-black/10 dark:hover:border-white/20 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 dark:hover:shadow-black/50 cursor-pointer relative overflow-hidden flex flex-col h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-700/50 dark:to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-grow h-full">
        
        {/* Image (for certificates) or Title/Desc (for projects) */}
        {image ? (
             <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src={image}
                    alt={title}
                />
            </div>
        ) : (
            <div className="mb-4 flex-shrink-0">
            <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white line-clamp-1 group-hover:text-black dark:group-hover:text-gray-200 transition-colors">{title}</h3>
            {description && (
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 h-16">
                {description}
                </p>
            )}
            </div>
        )}
        
        {/* Title for image-based cards if needed below image */}
         {image && <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-200 transition-colors">{title}</h3>}


        {/* Feature/Tag Section - Expandable middle section */}
        <div className="relative flex-grow mb-4 overflow-hidden min-h-[6rem]">
          {/* Tags (shown when not hovered) */}
          <div className={`flex flex-wrap gap-2 transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-4 hidden' : 'opacity-100 translate-y-0'}`}>
              {tags.slice(0, 5).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium border border-gray-200 dark:border-gray-600"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 5 && <span className="text-xs text-gray-400 dark:text-gray-500">+{tags.length - 5}</span>}
            </div>

          {/* Features (shown when hovered) - Only if features exist */}
          {features.length > 0 && (
            <div className={`absolute inset-0 flex flex-col gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                Features
              </h4>
              <div className="overflow-y-auto pr-1 max-h-full">
                 {features.slice(0, 4).map((feature, index) => (
                    <div
                    key={index}
                    className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 mb-1"
                    >
                    <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-1 flex-shrink-0" />
                    <span className="leading-tight">{feature}</span>
                    </div>
                ))}
              </div>
            </div>
          )}
           {/* If no features but tags exist, keep showing tags or show something else on hover? 
               For certificates, maybe we just show tags always. 
           */}
            {features.length === 0 && image && isHovered && (
                 <div className="absolute inset-0 flex flex-wrap gap-2 content-start">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/80 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 text-xs rounded-md font-medium border border-gray-200 dark:border-gray-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
               </div>
            )}
        </div>

        {/* Action Buttons - Fixed at bottom */}
       <div className="mt-auto pt-4 flex flex-wrap gap-3 z-10 flex-shrink-0">
            {btn1Url && (
                <a
                    href={btn1Url}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-300 group/btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="text-lg group-hover/btn:scale-110 transition-transform"/>
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
                 <FaExternalLinkAlt className="text-sm group-hover/btn2:scale-110 transition-transform"/>
                 {btn2Text}
               </a>
            )}
        </div>

      </div>
    </div>
  );
};

export default Card;
