import { useState, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { HiChartBar } from 'react-icons/hi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const EventCard = ({ title, date, time, location, spots, attending, price, tags, imageUrl, index }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    const toggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card bg-base-100 shadow-sm rounded-xl sm:rounded-4xl overflow-hidden">
            {/* Image and Heart button */}
            <figure className="relative h-36 sm:h-48">
                <img
                    src={imageUrl || `/api/placeholder/400/200`}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <button 
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1 rounded-full"
                    onClick={toggleFavorite}
                >
                    {isFavorite ? (
                        <FaHeart className="h-4 w-4 sm:h-6 sm:w-6 text-red-500" />
                    ) : (
                        <FaRegHeart className="h-4 w-4 sm:h-6 sm:w-6 text-gray-200 stroke-white" />
                    )}
                </button>

                {/* Image dots pagination */}
                <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center space-x-1">
                    {[...Array(4)].map((_, i) => (
                        <button
                            key={i}
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${i === index % 4 ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                        ></button>
                    ))}
                </div>
            </figure>

            <div className="card-body p-2 sm:p-4">
                {/* Tags */}
                <div className="flex justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className='gap-1 flex flex-wrap'>
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full ${tag.includes('Football') ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-1 sm:gap-2 justify-between items-center text-xs sm:text-md text-green-600">
                        <HiChartBar />
                        <h1 className='text-gray-600 text-xs sm:text-base'>Advanced</h1>
                    </div>
                </div>

                {/* Event title */}
                <h2 className="card-title text-lg sm:text-2xl md:text-3xl font-medium text-emerald-700 line-clamp-2">{title}</h2>

                {/* Date and time */}
                <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-800">
                    {date} • {time}
                </div>

                {/* Location */}
                <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-800">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 mr-1" />
                    {location}
                </div>

                {/* Footer */}
                <div className="flex justify-end items-center mt-2 sm:mt-4">
                    <div className="text-red-500 text-xs sm:text-sm font-medium">
                        {spots} spots left
                    </div>
                </div>

                <div className="flex justify-between items-end pt-1 sm:pt-2">
                    <div className="text-xs sm:text-sm text-gray-600">
                        {attending} attending
                    </div>
                    <div className="text-base sm:text-lg flex items-center">
                        <span className="text-white bg-black rounded-full py-0.5 px-2 text-xs sm:text-base mr-1">৳</span>
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-medium'>{price}</h1>
                        <span className="text-gray-500 text-xs sm:text-sm">/person</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Events = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const events = [
        {
            id: 1,
            title: "Legends Rise on the Field",
            date: "Thu, Dec 5",
            time: "12:30AM - 12:30PM",
            location: "Bashundhara Sports Complex",
            spots: "2",
            attending: "6/8",
            price: "320",
            tags: ["Football", "Below 25y"],
            imageUrl: "/Swim.png"
        },
        {
            id: 2,
            title: "Chasing Glory: Football Showdown",
            date: "Thu, Dec 5",
            time: "12:30AM - 12:30PM",
            location: "Bashundhara Sports Complex",
            spots: "2",
            attending: "6/8",
            price: "320",
            tags: ["Football", "Below 25y"],
            imageUrl: "/hockey.jpg"
        },
        {
            id: 3,
            title: "United We Play, United Win",
            date: "Thu, Dec 5",
            time: "12:30AM - 12:30PM",
            location: "Bashundhara Sports Complex",
            spots: "2",
            attending: "6/8",
            price: "320",
            tags: ["Football", "Below 25y"],
            imageUrl: "/Swim.png"
        },
        {
            id: 4,
            title: "Football Champions League",
            date: "Thu, Dec 5",
            time: "12:30AM - 12:30PM",
            location: "Bashundhara Sports Complex",
            spots: "2",
            attending: "6/8",
            price: "320",
            tags: ["Football", "Below 25y"],
            imageUrl: "/hockey.jpg"
        },
        {
            id: 5,
            title: "Premier Football Tournament",
            date: "Thu, Dec 5",
            time: "12:30AM - 12:30PM",
            location: "Bashundhara Sports Complex",
            spots: "2",
            attending: "6/8",
            price: "320",
            tags: ["Football", "Below 25y"],
            imageUrl: "/Swim.png"
        }
    ];

    const scroll = (direction) => {
        if (carouselRef.current) {
            // Adjust scroll amount based on screen size
            const cardWidth = window.innerWidth < 640 ? 290 : 550;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            if (direction === 'left' && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            } else if (direction === 'right' && currentIndex < events.length - (window.innerWidth < 640 ? 1 : 3)) {
                setCurrentIndex(currentIndex + 1);
            }
        }
    };

    return (
        <div className="py-4 sm:py-8 bg-white w-full sm:w-19/20 mx-auto px-4 sm:px-0">
            <div className="">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Other events you may like</h2>
                    <div className="flex gap-1 sm:gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className={`p-2 sm:p-3 rounded-full bg-gray-100 ${currentIndex === 0 ? 'text-gray-300' : 'text-gray-700'}`}
                            disabled={currentIndex === 0}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6 w-4 h-4">
                                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className={`p-2 sm:p-3 rounded-full bg-gray-100 ${currentIndex >= events.length - (window.innerWidth < 640 ? 1 : 3) ? 'text-gray-300' : 'text-gray-700'}`}
                            disabled={currentIndex >= events.length - (window.innerWidth < 640 ? 1 : 3)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6 w-4 h-4">
                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {events.map((event, index) => (
                            <div key={event.id} className="min-w-[280px] sm:min-w-[350px] md:min-w-[535px] max-w-[280px] sm:max-w-[350px] md:max-w-[520px] flex-shrink-0">
                                <EventCard {...event} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;