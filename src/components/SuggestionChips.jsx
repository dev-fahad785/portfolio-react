import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FiArrowRight, FiX } from "react-icons/fi";

const SuggestionChips = ({ suggestions = [], disabled = false, onSelect, resetTrigger, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (resetTrigger === 0) {
            setActiveIndex(0);
        }
    }, [resetTrigger]);

    const visibleSuggestions = useMemo(() => {
        if (!suggestions.length) {
            return { items: [], startIndex: 0 };
        }
        const windowSize = 4;
        const maxStart = Math.max(suggestions.length - windowSize, 0);
        const startIndex = Math.max(0, Math.min(activeIndex, maxStart));
        const endIndex = startIndex + windowSize;
        return {
            items: suggestions.slice(startIndex, endIndex),
            startIndex,
        };
    }, [activeIndex, suggestions]);

    if (!visibleSuggestions.items.length) {
        return null;
    }

    const handleChipClick = (absoluteIndex) => {
        if (disabled) {
            return;
        }
        const selectedSuggestion = suggestions[absoluteIndex];
        if (!selectedSuggestion) {
            return;
        }
        onSelect(selectedSuggestion.prompt);
        setActiveIndex(Math.min(absoluteIndex + 1, suggestions.length));
    };

    return (
    <div className="px-3 sm:px-4 py-2 bg-white/90 border-t border-gray-200">
            <div className="flex items-center justify-between mb-1.5">
                <p className="text-[11px] sm:text-xs text-gray-500">Suggested questions</p>
                <button
                    type="button"
                    className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    aria-label="Hide suggestions"
                    onClick={onClose}
                    disabled={disabled}
                >
                    <FiX className="text-sm" />
                </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 pb-1">
                {visibleSuggestions.items.map((item, idx) => {
                    const absoluteIndex = visibleSuggestions.startIndex + idx;
                    const isRecommended = absoluteIndex === activeIndex;
                    const isCompleted = absoluteIndex < activeIndex;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            disabled={disabled}
                className={`group flex items-center justify-between gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-1.5 rounded-full border text-xs sm:text-sm transition-all duration-200 ${
                                isRecommended
                    ? "border-gray-600 bg-gray-600 text-white hover:bg-gray-500"
                                    : isCompleted
                    ? "border-gray-400 bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "border-gray-300 text-gray-700 bg-white hover:bg-gray-100 hover:border-gray-400"
                } disabled:opacity-50 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400 w-full sm:w-auto text-left`}
                            onClick={() => handleChipClick(absoluteIndex)}
                        >
                            <span className="font-medium pr-1">{item.label}</span>
        <FiArrowRight className={`transition-colors duration-200 ${
                isRecommended
            ? "text-white group-hover:text-gray-100"
                    : isCompleted
            ? "text-gray-600 group-hover:text-gray-700"
            : "text-gray-400 group-hover:text-gray-600"
                }`} />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

SuggestionChips.propTypes = {
    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            prompt: PropTypes.string.isRequired,
        })
    ),
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    resetTrigger: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SuggestionChips;
