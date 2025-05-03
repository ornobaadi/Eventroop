import { useState } from 'react';
import { MoreVertical, X } from 'lucide-react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { RiShare2Line } from 'react-icons/ri';

export default function FootballBanner() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const toggleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <>
            <div className="py-6">
                <div className="flex flex-col md:flex-row gap-3">
                    {/* Left side main image */}
                    <div className="relative w-full md:w-2/3 aspect-5/2 overflow-hidden rounded-2xl md:rounded-4xl">
                        <img
                            src="/banner-hd.jpg"
                            alt="Football match night view"
                            className="w-full h-full object-cover"
                        />

                        {/* Carousel Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/90 rounded-full"></span>
                        </div>
                    </div>

                    {/* Right side thumbnails */}
                    <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2 md:gap-4 mt-2 md:mt-0">
                        <div className="w-1/2 md:w-full h-auto md:h-1/2 aspect-5/2 overflow-hidden rounded-2xl md:rounded-4xl">
                            <img
                                src="/banner-hd.jpg"
                                alt="Thumbnail 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-1/2 md:w-full h-auto md:h-1/2 aspect-5/2 overflow-hidden rounded-2xl md:rounded-4xl relative">
                            <img
                                src="/banner-hd.jpg"
                                alt="Thumbnail 2"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay for "+2 photos" */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-4xl">
                                <span className="text-white text-xl md:text-3xl font-semibold">+2 photos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Only visible on md and above */}
            <div className="hidden md:flex md:flex-row justify-between items-start gap-6 mt-5">
                {/* Event Info */}
                <div className="w-3/5">
                    <h2 className="text-6xl font-bold text-gray-900">
                        Road to the Football Finals
                    </h2>
                    <p className="text-gray-600 text-2xl mt-3">Bashundhara Sports Complex</p>
                    <p className="text-gray-600 text-2xl mt-2">Mar 14 from 7:30 PM - 9:30 PM</p>
                </div>

                {/* Action Icons */}
                <div className="w-1/6 flex gap-5 ml-auto">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100">
                        <RiShare2Line className="w-6 h-6 text-gray-600" />
                    </button>
                    <button 
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100"
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? (
                            <FaHeart className="w-4 h-4 text-red-500" />
                        ) : (
                            <FaHeart className="w-4 h-4 text-gray-600" />
                        )}
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center">
                        <MoreVertical className="w-7 h-7 text-gray-600" />
                    </button>
                </div>

                {/* Join Event Card */}
                <div className="bg-white rounded-3xl w-1/3 shadow-sm px-5 py-5 flex flex-col items-center space-y-4">
                    {/* Price and spots info */}
                    <div className="flex justify-between items-center w-full my-3 p-5 rounded-xl border border-gray-200">
                        <h1 className="text-red-500 text-xl font-medium">6 spots left</h1>
                        <h1 className="text-gray-900 text-xl font-semibold">
                            320tk /player<span className="text-gray-500 text-sm font-normal"> (both)</span>
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <button
                        className="w-full bg-[#63cfa0] hover:bg-emerald-500 text-xl text-black font-semibold py-5 my-3 rounded-full transition"
                        onClick={openModal}
                    >
                        Join event
                    </button>
                </div>
            </div>

            {/* Mobile Layout - Only visible below md */}
            <div className="md:hidden mt-5">
                {/* Event Info */}
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Road to the Football Finals
                    </h2>
                    <p className="text-gray-600 text-lg mt-2">Bashundhara Sports Complex</p>
                    <p className="text-gray-600 text-lg mt-1">Mar 14 from 7:30 PM - 9:30 PM</p>
                </div>

                {/* Action Icons */}
                <div className="w-full flex justify-end gap-4 mt-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100">
                        <RiShare2Line className="w-5 h-5 text-gray-600" />
                    </button>
                    <button 
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100"
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? (
                            <FaHeart className="w-4 h-4 text-red-500" />
                        ) : (
                            <FaHeart className="w-4 h-4 text-gray-600" />
                        )}
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center">
                        <MoreVertical className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Join Event Card */}
                <div className="bg-white rounded-3xl w-full shadow-sm px-5 py-5 flex flex-col items-center space-y-4 mt-4">
                    {/* Price and spots info */}
                    <div className="flex justify-between items-center w-full my-3 p-5 rounded-xl border border-gray-200">
                        <h1 className="text-red-500 text-lg font-medium">6 spots left</h1>
                        <h1 className="text-gray-900 text-lg font-semibold">
                            320tk /player<span className="text-gray-500 text-sm font-normal"> (both)</span>
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <button
                        className="w-full bg-[#63cfa0] hover:bg-emerald-500 text-lg text-black font-semibold py-4 my-3 rounded-full transition"
                        onClick={openModal}
                    >
                        Join event
                    </button>
                </div>
            </div>

            {/* Payment Method Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>

                    <div className="relative bg-[#34735f] rounded-2xl w-full max-w-sm mx-auto">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal content */}
                        <div className="flex flex-col items-center text-center p-6">
                            {/* Money icon */}
                            <div className="w-24 h-24 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                                    <path fill="#fde8cd" d="M13.5 16a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" />
                                    <path fill="#fde8cd" d="m14.347.66l3.18 4.456l2.097-.715L21.538 10h.962v12h-21V10h.51v-.01l.648.006zM9.397 10h10.028l-1.037-3.033l-1.522.487zM7.839 8.417L15.55 5.79l-1.604-2.25zM5.5 12h-2v2a2 2 0 0 0 2-2m10 4a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0m5 4v-2a2 2 0 0 0-2 2zm-2-8a2 2 0 0 0 2 2v-2zm-15 8h2a2 2 0 0 0-2-2z" />
                                </svg>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-semibold text-[#fde8cd] mb-6 md:mb-8">Choose Payment <br /> Method</h2>

                            {/* Payment Options */}
                            <div className="w-full space-y-5 md:space-y-6 mb-6 md:mb-8">
                                {/* bKash Option */}
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        defaultChecked
                                        className="mt-1 w-5 h-5 accent-emerald-600"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-xl text-white font-medium">bKash</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M22.981 8.632s-4.163 14.704-3.809 14.704s16.476 2.923 16.476 2.923Z" strokeWidth="1" />
                                                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M22.981 8.632L6.329 6.152l12.843 17.184l2.215 10.186l14.261-7.263l3.72-8.814l-8.975 1.501m7.536 1.909H43l-3.632-3.41" strokeWidth="1" />
                                                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="m21.387 33.522l.354 1.905l-8.016 6.421l5.447-18.512m16.476 2.923l-.531 2.879l-12.269 3.64M8.455 8.997H5L16.044 19.15" strokeWidth="1" />
                                            </svg>
                                        </div>
                                        <p className="text-sm md:text-base text-white text-left mt-1">
                                            Send the payment now via bKash to confirm your spot instantly.
                                        </p>
                                    </div>
                                </label>

                                {/* Cash Option */}
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        className="mt-1 w-5 h-5 accent-emerald-600"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-xl text-white font-medium">Cash</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <g fill="none" stroke="#fff" strokeWidth="1.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2 11l2.807-3.157A4 4 0 0 1 7.797 6.5H8m-6 13h5.5l4-3s.81-.547 2-1.5c2.5-2 0-5.166-2.5-3.5C8.964 12.857 7 14 7 14" />
                                                    <path d="M8 13.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m4.5-1.99l.01-.011m-9.01.011l.01-.011" />
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-sm md:text-base text-white text-left mt-1">
                                            Pay the event fee directly to the host before the game starts.
                                        </p>
                                    </div>
                                </label>
                            </div>

                            {/* Continue Button */}
                            <button className="w-full bg-[#2b2b2b] hover:bg-black text-white font-medium py-3 md:py-4 rounded-full transition">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}