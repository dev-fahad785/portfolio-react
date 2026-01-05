// import React, { useEffect, useState } from 'react';

// const VisitorCounter = () => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         // Get the current count from localStorage
//         const storedCount = localStorage.getItem('visitorCount');

//         // If there's a count stored, set it as the initial count
//         if (storedCount) {
//             setCount(Number(storedCount));
//         }

//         // Increment the count and update localStorage
//         const newCount = count + 1;
//         setCount(newCount);
//         localStorage.setItem('visitorCount', newCount);
//     }, []); // Empty dependency array means this runs once on mount

//     return (
//         <div className="text-center my-4 p-4 border border-gray-300 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold">Visitor Counter</h2>
//             <p className="text-lg">Total Visitors: {count}</p>
//         </div>
//     );
// };

// export default VisitorCounter;
import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to handle visitor counting logic
        const handleVisitorCount = () => {
            try {
                // Get the current count from localStorage
                const storedCount = localStorage.getItem('visitorCount');
                const currentCount = storedCount ? Number(storedCount) : 0;

                // Increment the count and update localStorage
                const newCount = currentCount + 1;
                localStorage.setItem('visitorCount', newCount.toString());
                setCount(newCount);
            } catch (error) {
                console.error('Error updating visitor count:', error);
                // Fallback if localStorage is not available
                setCount(prevCount => prevCount + 1);
            } finally {
                setLoading(false);
            }
        };

        // Initialize the counter
        handleVisitorCount();

        // Optional: You might want to clean up on component unmount
        return () => {
            // Any cleanup code can go here
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="visitor-counter p-4 bg-blue-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-black-800 mb-2">Visitor Counter</h3>
            {loading ? (
                <p className="text-gray-600">Loading...</p>
            ) : (
                <div className="flex items-center">
                    <span className="text-lg font-bold mr-2">Total Visitors:</span>
                    <span className="text-2xl font-bold text-black-600">{count}</span>
                </div>
            )}
        </div>
    );
};

export default VisitorCounter;