
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Heading from "./Heading";
import { useState, useEffect, useMemo, useCallback } from "react";
import {Quote } from "lucide-react";

// Moved outside component to avoid re-creation on each render
const reviews = [
    {
        img: "https://www.upwork.com/profile-portraits/c17y8y2X8X3FRrM4RdA7uXR6-ewmfWFS8mCxezR8abLQRYLzZtVCGNmdMRrPz0EzX0",
        title: "Hassan Raza",
        name: "CEO Bytelogist",
        body: "Fahad is a true professional. Their attention to detail and commitment to quality are unmatched. They were always responsive and willing to go the extra mile to ensure our satisfaction. We highly recommend their services.",
        
    },
    {
        img: "https://avatar.vercel.sh/jill",
        title: "Ayesha Shoaib",
        name: "HR @Evionics",
        body: "Fahad demonstrates a deep understanding of modern web development frameworks and tools. His sites are responsive, user-friendly, and aesthetically pleasing. Whether custom-built or integrating third-party services, his versatility shines through. What stands out most is the smooth performance across devices, showcasing his attention to detail in both frontend and backend development.",
        
    },

    {
        img: "https://dribrar.netlify.app/images/ibrar's%20img.png",
        title: "Dr Ibrar",
        name: "Animal Nutritionist",
        body: "Fahad's work on my portfolio exceeded all exceptions. Not only did he meet my requirements, but he also went above and beyond to create a stunning and effective presentation of my skills and experience. His attention to detail and creative approach resulted in a portfolio that is both visually appealing and professionally polished. I highly recommend Fahad to anyone seeking a top-notch web developer.",
        
    },
    {
        img: "https://www.gravatar.com/avatar/?d=mp",
        name: "Sr Project Manager",
        title: "Khubaib Ahmed",
        body: `Fahad interned with us for a short time but made a strong impression. He quickly learned HTML, CSS, JavaScript, and responsive design. He’s eager to learn and has good potential in the field. I’m confident he’ll continue to sharpen his skills and bring value to any team he joins.
Best wishes!`,
        
    },

];

// Keywords as a constant outside component to avoid recreation
const KEYWORDS = ['Fahad', 'recommend', 'working', 'shines', 'talented', 'web', 'website', 'professional', 'innovative', 'highly', 'quality', 'creative', 'high', 'performance', 'frontend', 'backend', 'pleasing', 'development', 'skills', 'project', 'best'];

const highlightKeywords = (text) => {
    // Create regex pattern once, with word boundaries for more precise matching
    const pattern = new RegExp(`\\b(${KEYWORDS.join('|')})\\b`, 'gi');
    return text.replace(pattern, '<strong>$1</strong>');
};



const ReviewCard = ({ img, name, title, body }) => {
    const [isHovered, setIsHovered] = useState(false);
    // const [likes, setLikes] = useState(Math.floor(Math.random() * 15) + 1);


    // Memoize the highlighted body to avoid recalculation on each render
    const highlightedBody = useMemo(() => highlightKeywords(body), [body]);



    return (
        <figure
            className={cn(
                "relative w-72 cursor-pointer overflow-visible rounded-xl border p-5 transition-all duration-300",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] hover:shadow-lg",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                isHovered && "transform scale-105"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Quote className="absolute text-gray-200 dark:text-gray-700 opacity-20 right-4 top-4" size={14} />
            <div className="flex flex-row items-center gap-3">
                <div className="relative">
                    <img
                        className="rounded-full object-cover object-top shadow-md"
                        style={{ width: '60px', height: '60px' }}
                        alt={`${name}'s profile`}
                        src={img}
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-gray-500 dark:text-white/40">{title}</p>
                </div>
            </div>
            <blockquote
                className="mt-3 text-sm max-h-40 overflow-auto pr-2 leading-relaxed text-gray-700 dark:text-gray-300 custom-scrollbar"
                dangerouslySetInnerHTML={{ __html: isHovered ? highlightedBody : body }}
            />
        
        </figure>
    );
};

const Skeleton = () => (
    <div className="flex flex-col animate-pulse p-4 w-72 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="space-y-2">
                <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    ))}
                </div>
            </div>
        </div>
        <div className="space-y-2">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-2 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
    </div>
);

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all');

    // Split the reviews into two rows using useMemo to avoid recalculation on each render
    const { firstRow, secondRow, filteredCount } = useMemo(() => {
        let filtered;

        if (activeFilter === 'all') {
            filtered = reviews;
        } else {
            const ratingFilter = parseInt(activeFilter);
            filtered = reviews.filter(review => review.rating === ratingFilter);
        }

        const middleIndex = Math.ceil(filtered.length / 2);
        return {
            firstRow: filtered.slice(0, middleIndex),
            secondRow: filtered.slice(middleIndex),
            filteredCount: filtered.length
        };
    }, [activeFilter]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleFilterChange = useCallback((filter) => {
        setIsLoading(true);
        setActiveFilter(filter);
        setTimeout(() => setIsLoading(false), 500);
    }, []);

    // Calculate average rating
    const averageRating = useMemo(() => {
        return (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
    }, []);

    return (
        <section id="testimonials" className="py-12 px-4">
            <Heading heading='Testimonials' subHeading="What People Think About Me" />



            <div className="relative w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-sm md:shadow-xl">
                {isLoading ? (
                    <div className="flex flex-col space-y-4 p-4">
                        <div className="flex space-x-4 overflow-x-auto py-2">
                            {[...Array(4)].map((_, i) => (
                                <Skeleton key={i} />
                            ))}
                        </div>
                        <div className="flex space-x-4 overflow-x-auto py-2">
                            {[...Array(4)].map((_, i) => (
                                <Skeleton key={i} />
                            ))}
                        </div>
                    </div>
                ) : filteredCount === 0 ? (
                    <div className="flex items-center justify-center h-32">
                        <p className="text-lg font-semibold dark:text-white">No reviews match your filter</p>
                    </div>
                ) : (
                    <>
                        <Marquee pauseOnHover className="[--duration:20s] py-4">
                            {firstRow.map((review, index) => (
                                <ReviewCard key={`${review.name}-${index}`} {...review} />
                            ))}
                        </Marquee>
                        {secondRow.length > 0 && (
                            <Marquee reverse pauseOnHover className="[--duration:20s] py-4">
                                {secondRow.map((review, index) => (
                                    <ReviewCard key={`${review.name}-${index}`} {...review} />
                                ))}
                            </Marquee>
                        )}
                    </>
                )}
                
            </div>


        </section>
    );
};

export default Reviews;