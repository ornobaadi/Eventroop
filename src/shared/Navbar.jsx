import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaMedal, FaUserCircle } from 'react-icons/fa';
import { FiCalendar, FiSearch, FiMenu, FiUser } from 'react-icons/fi'; // Added FiMenu, FiUser
import { GiTrophy } from 'react-icons/gi'; // Added GiTrophy for Leaderboard

const Navbar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
    const calendarRef = useRef(null);
    const dateInputRef = useRef(null);
    const searchInputRef = useRef(null);

    // Handle date selection
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setIsCalendarOpen(false);
    };

    // Toggle calendar visibility and calculate date input position
    const toggleCalendar = () => {
        if (dateInputRef.current) {
            const rect = dateInputRef.current.getBoundingClientRect();
            setButtonPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
            });
        }
        setIsCalendarOpen((prev) => !prev);
    };

    // Close calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target) &&
                dateInputRef.current &&
                !dateInputRef.current.contains(event.target)
            ) {
                setIsCalendarOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Calendar dialog component using a Portal
    const CalendarDialog = () => (
        <div
            ref={calendarRef}
            className={`dropdown bg-base-100 rounded-box shadow-lg ${isCalendarOpen ? 'block' : 'hidden'
                }`}
            style={{
                position: 'absolute',
                top: `${buttonPosition.top}px`,
                left: `${buttonPosition.left}px`,
                zIndex: 50,
            }}
        >
            <calendar-date className="cally" onChange={handleDateChange}>
                <svg
                    aria-label="Previous"
                    className="fill-current size-4"
                    slot="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <svg
                    aria-label="Next"
                    className="fill-current size-4"
                    slot="next"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <calendar-month />
            </calendar-date>
        </div>
    );

    return (
        <div>
            <div className="navbar min-h-20 bg-base-100 shadow-sm px-10">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl flex gap-3">
                        <img src="/Eventroop.png" alt="Eventroop Logo" />
                        <h1 className="font-semibold">
                            Eventroop
                        </h1>
                    </a>
                    <div className="ml-20 flex gap-4">
                        {/* Date Input */}
                        <div className="relative">
                            <input
                                ref={dateInputRef}
                                type="text"
                                className="input rounded-full pr-12 pl-4 w-60 h-12 shadow-md bg-white border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#63CFA0] focus:border-transparent"
                                value={selectedDate || ''}
                                onClick={toggleCalendar}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                placeholder="Select date"
                                readOnly
                            />
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <span
                                    onClick={toggleCalendar}
                                    className="flex items-center justify-center w-8 h-8 bg-[#63CFA0] rounded-full"
                                >
                                    <FiCalendar className="text-gray-900 w-4 h-4" />
                                </span>
                            </span>
                        </div>
                        {/* Search Input */}
                        <div className="relative">
                            <input
                                ref={searchInputRef}
                                type="text"
                                className="input rounded-full pr-12 pl-4 py-2 w-60 h-12 shadow-md bg-white border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#63CFA0] focus:border-transparent"
                                placeholder="Search"
                            />
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <span className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
                                    <FiSearch className="text-gray-600 w-4 h-4" />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="navbar-end flex gap-3 ">
                    {/* Leaderboard Button */}
                    <button
                        className="flex items-center gap-2 px-4 py-2 h-12 bg-[#E6F5EC] text-[#2E7D32] rounded-full"
                    >
                        <FaMedal className="w-4 h-4" />
                        Leaderboard
                    </button>
                    {/* Login / Sign up Button */}
                    <button
                        className="px-6 py-2 h-12 bg-white border border-[#2E7D32] text-[#2E7D32] rounded-full"
                    >
                        Login / Sign up
                    </button>
                    {/* User Profile/Menu Button */}
                    <div className="flex items-center justify-evenly w-20 h-12 bg-white border border-gray-300 rounded-full overflow-hidden">
                        <button className="flex items-center justify-center w-5 h-10">
                            <FiMenu className="w-4.5 h-4.5 text-gray-900" />
                        </button>
                        <button className="flex items-center justify-center">
                            <FaUserCircle className="w-8 h-8 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
            {isCalendarOpen && createPortal(<CalendarDialog />, document.body)}
        </div>
    );
};

export default Navbar;