
import React, { useEffect, useState, useRef } from "react";

const LoaderComponent = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const loaderRef = useRef(null);
    
    // Phrases that will rotate during loading
    const loadingPhrases = [
        "Welcome to RF GUL's Portfolio",
        "Preparing awesome projects...",
        "Loading skills and experiences...",
        "Almost ready to explore...",
    ];
    
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    
    useEffect(() => {
        // Rotate through the phrases during loading
        const phraseInterval = setInterval(() => {
            setCurrentPhraseIndex(prev => (prev + 1) % loadingPhrases.length);
        }, 2000);
        
        // Progress bar animation with non-linear progression
        // Makes it feel more natural with faster start and slower finish
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    clearInterval(phraseInterval);
                    setIsComplete(true);
                    return 100;
                }
                
                // Non-linear progression: faster at beginning, slows down near end
                const increment = 
                    prevProgress < 30 ? 2 : 
                    prevProgress < 60 ? 1.5 : 
                    prevProgress < 90 ? 0.8 : 0.5;
                    
                return Math.min(prevProgress + increment, 100);
            });
        }, 30);
        
        // Cleanup intervals
        return () => {
            clearInterval(interval);
            clearInterval(phraseInterval);
        };
    }, []);
    
    // Handle the complete animation and unmounting
    useEffect(() => {
        if (isComplete) {
            // Wait for fade-out animation to complete before unmounting
            const timer = setTimeout(() => {
                setShowLoader(false);
                if (onLoadComplete) onLoadComplete();
            }, 1000);
            
            return () => clearTimeout(timer);
        }
    }, [isComplete, onLoadComplete]);
    
    // If loader is completely done and hidden, don't render anything
    if (!showLoader) return null;
    
    return (
        <div
            ref={loaderRef}
            id="loader"
            className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
            {/* Background grid pattern */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
                {Array.from({ length: 144 }).map((_, index) => (
                    <div key={index} className="border border-gray-700"></div>
                ))}
            </div>
            
            {/* Logo with enhanced animation */}
            <div className="relative mb-8">
                <img
                    id="logo"
                    src="/logo.svg"
                    alt="DEV RF-GUL Logo"
                    className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 filter drop-shadow-lg animate-pulse"
                />
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-30 animate-ping"></div>
            </div>

            {/* Welcome message with transition */}
            <div
                id="welcome-msg"
                className="text-white text-xl md:text-2xl lg:text-3xl mt-4 text-center font-poppins transition-all duration-500 h-12"
            >
                {loadingPhrases[currentPhraseIndex]}
            </div>

            {/* Progress Container with improved styling */}
            <div
                id="progress-container"
                className="w-4/5 max-w-md h-2 md:h-3 mt-8 bg-gray-800 rounded-full overflow-hidden relative"
            >
                {/* Progress Bar with gradient */}
                <div
                    id="progress-bar"
                    style={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 relative overflow-hidden"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                </div>
                
                {/* Dots marking progress milestones */}
                {[25, 50, 75].map(milestone => (
                    <div 
                        key={milestone}
                        className={`absolute w-2 h-2 md:w-3 md:h-3 bg-gray-800 rounded-full transform -translate-y-1/2 top-1/2 border ${
                            progress >= milestone ? 'border-white' : 'border-gray-600'
                        }`}
                        style={{ left: `${milestone}%` }}
                    />
                ))}
            </div>

            {/* Progress Number with animation */}
            <div
                id="progress-number"
                className="text-white text-lg md:text-xl mt-4 font-poppins flex items-center"
            >
                <span className="min-w-16 text-center">{Math.round(progress)}%</span>
                <span className="ml-2 text-xs text-gray-400">
                    {progress < 30 ? "Initializing..." : 
                     progress < 60 ? "Loading assets..." : 
                     progress < 90 ? "Processing data..." : 
                     "Finalizing..."}
                </span>
            </div>
        </div>
    );
};

// Add keyframe animation for shimmer effect
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`;
document.head.appendChild(styleTag);

export default LoaderComponent;